import React from 'react';

type MessageProps = {
  count:string
  timeNow:string
  lag: string
  lagFirst: string

}


const Message: React.FC<MessageProps> = ({ count, timeNow, lag, lagFirst}) => {
  return (
    <div className="tableManagment__message">
      <div className="tableManagment__message-elem tableManagment__message-elem--one">
        <p><span>{count}</span></p>
      </div>
      
      
      <div className="tableManagment__message-elem tableManagment__message-elem--two">
        <p>{timeNow}</p>
      </div>
      
      {
        (count === "1") && <div className='tableManagment__leader'>leader</div>
      }
      {
        (count !== "1") && (
          <div className="tableManagment__message-elem tableManagment__message-elem--four">
            <p> + {lag}</p>
            <p> + {lagFirst}</p>
          </div>
        )
      }
    </div>
  );
}
export default Message;