import React from 'react';

const Message = (props) => {
  return (
    <div className="message-container">
      <i className="author">
        <span>{props.message.author}</span>
        <small>{props.message.time}</small>
      </i>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
