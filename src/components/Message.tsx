import React, { FC } from 'react';

interface MessageProps {
    message: string;
}
const Message: FC<MessageProps> = ({ message }) => {
    return (<div className="message">{message}</div>);
}


export default Message;