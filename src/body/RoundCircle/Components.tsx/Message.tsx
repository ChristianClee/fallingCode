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
      <p>Tap<span>{count}</span></p>
      <p>{timeNow}</p>
      {(count === "1") ||
      <div>
        <p> <span></span>  +{lag}</p>
        <p> <span>leader</span> +{lagFirst}</p>
      </div>
      }
      {
        (count === "1") && <div className='tableManagment__leader'>leader</div>
      }
      
      
    </div>
  );
}
export default Message;