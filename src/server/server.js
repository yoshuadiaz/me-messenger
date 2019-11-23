import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import axios from 'axios';
import passport from 'passport';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import main from './routes/main';

dotenv.config();

const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`));

//Basic strategy
require('./utils/strategies/basic');

//OAuth strategy
require('./utils/strategies/oauth');

//Twitter strategy
require('./utils/strategies/twitter');

if (ENV === 'development') {
  console.log('Loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://${HOST}:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loading ${ENV} config`);
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.post('/auth/sign-in', async (req, res, next) => {
  const { body: rememberMe } = req;

  passport.authenticate('basic', async (error, data) => {
    try {
      if (error || !data) {
        return next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
          maxAge: rememberMe.remember ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC,
        });
        res.status(200).json({ ...user.user, token });
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;
  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: 'post',
      data: user,
    });

    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.data,
    });
  } catch (error) {
    next(error);
  }
});

app.get('/auth/google-oauth', passport.authenticate('google-oauth', {
  scope: ['email', 'profile', 'openid']
}));

app.get(
  '/auth/google-oauth/callback',
  passport.authenticate('google-oauth', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });

    res.cookie('email', user.user.email, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });
    res.cookie('name', user.user.name, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });
    res.cookie('id', user.user.id, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });

    res.status(200).redirect('/chats');
  }
);

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });

    res.cookie('email', user.user.email, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });
    res.cookie('name', user.user.name, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });
    res.cookie('id', user.user.id, {
      httpOnly: !(ENV === 'development'),
      secure: !(ENV === 'development'),
    });

    res.status(200).redirect('/chats');
  }
);

app.post('/chats/user', async (req, res, next) => {
  const { chat } = req.body;
  const { token } = req.cookies;
  try {
    const response = await axios({
      url: `${process.env.API_URL}/api/chats/user`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: chat,
    });
    res.status(200).json(response.data.data);
  } catch (error) {
    console.log('EL ERROR: ', error)
    next(error);
  }
});

app.get('/chats/user/:id', async (req, res, next) => {
  const { id } = req.params;
  const { token } = req.cookies;
  try {
    const response = await axios({
      url: `${process.env.API_URL}/api/chats/user/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.status(200).json(response.data.data);
  } catch (error) {
    next(error);
  }
});

app.get('/chats/actual/:id', async (req, res, next) => {
  const { id } = req.params;
  const { token } = req.cookies;
  try {
    const response = await axios({
      url: `${process.env.API_URL}/api/chats/actual/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.status(200).json(response.data.data);
  } catch (error) {
    next(error);
  }
});

app.post('/messages', async (req, res, next) => {
  const { token } = req.cookies;

  try {
    const response = await axios({
      url: `${process.env.API_URL}/api/messages/chat/`,
      method: 'post',
      data: req.body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
});

app.get('/messages/chat/:id', async (req, res, next) => {
  const { id } = req.params;
  const { token } = req.cookies;
  try {
    const response = await axios({
      url: `${process.env.API_URL}/api/messages/chat/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.status(200).json(response.data.data);
  } catch (error) {
    next(error);
  }
});

app.get('*', main);

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server runing on ${PORT}`);
});