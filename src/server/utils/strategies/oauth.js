import passport from 'passport';
import axios from 'axios';
import boom from '@hapi/boom';
import { OAuth2Strategy } from 'passport-oauth';
import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://www.googleapis.com/oauth2/v4/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo";

const oAuth2Strategy = new OAuth2Strategy(
  {
    authorizationURL: GOOGLE_AUTHORIZATION_URL,
    tokenURL: GOOGLE_TOKEN_URL,
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google-oauth/callback"
  },
  async function (accessToken, refreshToken, profile, cb) {
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/auth/sign-provider`,
      method: "post",
      data: {
        name: profile.name,
        email: profile.email,
        password: profile.id,
        apiKeyToken: process.env.API_KEY_TOKEN
      }
    });

    if (!data || status !== 200) {
      return cb(boom.unauthorized(), false);
    }

    return cb(null, data);
  }
);

oAuth2Strategy.userProfile = function (accessToken, done) {
  this._oauth2.get(GOOGLE_USERINFO_URL, accessToken, (err, body) => {
    if (err) {
      return done(err);
    }

    try {
      const { sub, name, email } = JSON.parse(body);

      const profile = {
        id: sub,
        name,
        email
      };

      done(null, profile);
    } catch (parseError) {
      return done(parseError);
    }
  });
};

passport.use("google-oauth", oAuth2Strategy);