import { useState, useEffect } from 'react';

const initialState = {
  tagsActives: [],
};


const useInitialState = () => {
  const [state, setState] = useState(initialState);
  
  const toggleTag = (props) => {
    setState({
      ...state,
      tagsActives: state.tagsActives.includes(props.name)
      ? [] : [props.name],
    });
  };
  return {
    state,
    toggleTag,
  };

};

export default useInitialState;
