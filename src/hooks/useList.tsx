import {useEffect, useState} from 'react';

const useList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json.data);
      });
  }, []);

  return {
    users,
  };
};

export default useList;
