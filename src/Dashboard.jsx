import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        { this.props.size }
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    size: state.stuff.length,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
