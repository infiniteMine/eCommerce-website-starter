import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (<h1>Page Not Found!!!</h1>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any)
};

NotFoundPage.defaultProps = {
  staticContext: {}
};

export default {
  component: NotFoundPage
};
