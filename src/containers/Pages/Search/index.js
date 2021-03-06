/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SearchArticles from '../../../containers/Fragments/SearchArticles';
import CategoryGrid from '../../../components/CategoryGrid';

export class Search extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="page-fade-in">
        <Helmet title="Search" />
        <h1 className="dn">{this.props.match.params.query}</h1>
        <p className="pt4  black  tac  pt5  pt4-sm  pv4  pb3-sm">Latest results for <span className="fw6">{this.props.match.params.query}</span></p>
        <SearchArticles match={this.props.match} />
        <CategoryGrid />
      </main>
    );
  }
}

Search.propTypes = {
  match: PropTypes.shape(),
};

Search.defaultProps = {
  match: [],
};

export default Search;
