import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setChats(data));
  }, [])
  return chats;
};

export default useInitialState;