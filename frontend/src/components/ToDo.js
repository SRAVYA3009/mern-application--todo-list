import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const ToDo = ({ text, updateMode, deleteToDo, timestamp }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div className={`todo${completed ? ' completed' : ''}`}>
      <div className="text">{text}
      <br/>
      {timestamp}
      </div>
      <div className="icons">
        {!completed && (
          <button
            className={`completed-button${completed ? ' active' : ''}`}
            onClick={handleComplete}
          >
            Mark as Complete
          </button>
        )}
        {completed && <span className="completed-text">Completed</span>}
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;