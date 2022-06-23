import { connect } from 'react-redux';
import React from 'react';

function Notification({ notification }) {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  if (notification) {
    return (
      <div style={style}>
        {notification}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notification: state.notifications,
});

const connectedNotification = connect(mapStateToProps)(Notification);
export default connectedNotification;
