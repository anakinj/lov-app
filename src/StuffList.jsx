
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';

import * as stuffActions from './actions/stuffActions';

class StuffList extends React.Component {
  componentWillMount() {
    this.props.stuffActions.fetchStuff();
  }
  renderData() {
    return (
      <div>
        {this.props.stuff}
      </div>
    );
  }
  render() {
    return (
      <div className="">
        {this.props.stuff.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

StuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuff: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    stuff: state.stuff,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StuffList);
