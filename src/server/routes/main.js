import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StaticRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "../../frontend/routes/serverRoutes";
import Layout from "../../frontend/components/Layout";
import reducer from "../../frontend/reducers";
import render from "../render";

require("dotenv").config();

const main = async (req, res, next) => {
  try {
    let initialState;
    try {
      const { token, email, name, id } = req.cookies;
      let user = {};
      if (email || name || id) {
        user = {
          id,
          email,
          name
        };
      }

      initialState = {
        user
      };
    } catch (error) {
      initialState = {
        user: {}
      };
    }
    const isLogged = (initialState.user.id);
    const store = createStore(reducer, initialState);
    const html = renderToString(
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
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (error) {
    next(error);
  }
};

export default main;
