/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as action from './action';
import Loading from '../../../components/Loading';
import AuthorArticleList from '../../../components/ArticleList/Latest';


export class AuthorArticles extends PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchAuthorArticlesIfNeeded(id);
  }

  renderAuthorArticleList = () => {
    const { authorArticles } = this.props;

    if (
      !authorArticles.readyStatus ||
      authorArticles.readyStatus === action.AUTHORARTICLES_INVALID ||
      authorArticles.readyStatus === action.AUTHORARTICLES_REQUESTING ||
      authorArticles.readyStatus === action.AUTHORARTICLES_FAILURE
    ) {
      return <Loading type="AuthorArticles" />;
    }

    return <AuthorArticleList list={authorArticles.list} />;
  };

  render() {
    return (
      <div>
        {this.renderAuthorArticleList()}
      </div>
    );
  }
}

const connector = connect(
  ({ authorArticles }) => ({ authorArticles }),
  dispatch => ({
    fetchAuthorArticlesIfNeeded: (id: string) =>
      dispatch(action.fetchAuthorArticlesIfNeeded(id)),
  }),
);

AuthorArticles.propTypes = {
  authorArticles: PropTypes.shape({
    readyStatus: PropTypes.string,
    err: PropTypes.any,
    list: PropTypes.arrayOf(PropTypes.object),
  }),
  match: PropTypes.shape(),
  fetchAuthorArticlesIfNeeded: PropTypes.func,
};

AuthorArticles.defaultProps = {
  authorArticles: {
    readyStatus: '',
    err: '',
    list: [{}],
  },
  match: [],
  fetchAuthorArticlesIfNeeded: () => {},
};

export default connector(AuthorArticles);
