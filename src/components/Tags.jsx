import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

const Tags = (props) => {
  const { toggleTag } = useContext(AppContext);

  return (
    <button
      ref={props.ref}
      id={props.id}
      className={props.className}
      onClick={() => {
        toggleTag(props);
      }}
    >
      <p>{props.name}</p>
    </button>
  );
};

export default Tags;
