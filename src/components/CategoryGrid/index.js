/* @flow */
/* eslint-disable import/no-named-as-default, react/prefer-stateless-function, max-len */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


export class CategoryGrid extends PureComponent {
  render() {
    return (
      <div>
        <div className="container  pt3  pb5">
          <div className="row">
            <div className="col-sm-12  col-lg-6">
              <Link className="link" to={'/Category/Interviews'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/q_auto:good/categories/interviews.jpg)' }}>
                  <h4 className="rel  tac  white  t6  title-font  bg-black  pv1  CategoryGrid__title">Interviews</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-lg-6">
              <Link className="link" to={'/Category/Insights'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/q_auto:good/categories/insights.jpg)' }}>
                  <h4 className="rel  tac  white  t6  title-font  bg-black  pv1  CategoryGrid__title">Insights</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-lg-6">
              <Link className="link" to={'/Category/News'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/q_auto:good/categories/news.jpg)' }}>
                  <h4 className="rel  tac  white  t6  title-font  bg-black  pv1  CategoryGrid__title">News</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-lg-6">
              <Link className="link" to={'/Category/Mixes'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/q_auto:good/categories/mixes.jpg)' }}>
                  <h4 className="rel  tac  white  t6  title-font  bg-black  pv1  CategoryGrid__title">Mixes</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryGrid;
