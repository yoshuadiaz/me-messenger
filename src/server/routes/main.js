import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';
import initialStateFromFrontEnd from '../../frontend/initialState';
import axios from 'axios';

require('dotenv').config();

const main = async (req, res, next) => {
  const sheet = new ServerStyleSheet();
  try {
    let initialState;
    try {
      const { token, email, name, id } = req.cookies;
      let { user } = initialStateFromFrontEnd;
      if (email || name || id) {
        user.data = {
          id,
          email,
          name,
        };
      } else {
        user.data = {};
      }

      let conversations = await axios({
        url: `${process.env.API_URL}/api/chats`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get'
      });

      conversations = conversations.data.data;

      initialState = {
        ...initialStateFromFrontEnd,
        user,
        conversations
      };
    } catch (error) {
      initialState = initialStateFromFrontEnd;
    }
    const isLogged = (initialState.user.data.id);
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={{}}
          >
            <Layout>
              {renderRoutes(Routes(isLogged))}
            </Layout>
          </StaticRouter>
        </Provider>
      </StyleSheetManager>
    );
    const styleTags = sheet.getStyleTags();
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (error) {
    next(error);
  } finally {
    sheet.seal();
  }
};

export default main;
