/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class PageHome extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Redbull Walmart App" />
        </Helmet>
        <div className="home-page test-class">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>A minimal <i>React-Redux</i> boilerplate with all the best practices</p>
          </section>
        </div>
      </article>
    );
  }
}
