import {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
const useDetail = () => {
  const [userData, setUserData] = useState({});

  const route: {
    params: {
      id: number;
    };
  } = useRoute();
  const {id} = route.params;

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(response => response.json())
      .then(json => {
        setUserData(json.data);
      });
  }, [id]);

  return {userData};
};

export default useDetail;
