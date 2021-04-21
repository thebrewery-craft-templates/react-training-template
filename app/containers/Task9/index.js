/**
 *
 * Task9
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTask9 from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Task9() {
  useInjectReducer({ key: 'task9', reducer });
  useInjectSaga({ key: 'task9', saga });

  return (
    <div>
      <Helmet>
        <title>Task9</title>
        <meta name="description" content="Description of Task9" />
      </Helmet>
    </div>
  );
}

Task9.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  task9: makeSelectTask9(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Task9);
