import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channelFromParams, this.props.currentUser, this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          type="text"
          ref={(input) => { this.messageBox = input; }}
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    // selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
