
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from './actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';

class StuffList extends React.Component {
  renderData() {
    return <div>{this.props.stuffs}</div>;
  }
  componentWillMount() {
     this.props.stuffActions.fetchStuff();
   }
  render() {
    return (
      <div className="">
          {this.props.stuffs.length > 0 ?
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
  stuffs: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stuffs: state.stuff
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StuffList);
