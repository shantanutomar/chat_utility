import React from "react";

const Message = props => {
  return (
    <div>
      <span>
        {props.messageAuthor} : {props.messageText}
      </span>
    </div>
  );
};
export default Message;
