import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMessages } from '../actions';
// import { selectChannel } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  // handleClick = (channel) => {
  //   this.props.selectChannel(channel);
  // }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {
            this.props.channels.map((channel) => {
              return (
                <li
                  key={channel}
                  className={channel === this.props.channelFromParams ? 'active' : null}
                  //onClick={() => this.handleClick(channel)}
                  role="presentation"
                >
                  <Link to={`/${channel}`}>
                    #{channel}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      // selectChannel: selectChannel,
      fetchMessages: fetchMessages
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    // selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
