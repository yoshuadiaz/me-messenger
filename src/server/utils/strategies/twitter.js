import passport from 'passport';
import axios from 'axios';
import boom from '@hapi/boom';
import { get } from 'lodash';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
      includeEmail: true
    },
    async function (token, tokenSecret, profile, cb) {
      const { data, status } = await axios({
        url: `${process.env.API_URL}/api/auth/sign-provider`,
        method: "post",
        data: {
          name: profile.displayName,
          email: get(
            profile,
            "emails.0.value",
            `${profile.username}@twitter.com`
          ),
          password: profile.id,
          apiKeyToken: process.env.API_KEY_TOKEN
        }
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    }
  )
)