import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  fetchUser,
  fetchUserFailure,
  fetchUserSucess,
} from '../redux/actions/entities/users';

const Home = () => {
  const loading = useSelector(state => state.entities.users.loading);
  const users = useSelector(state => state.entities.users.users);

  const dispatch = useDispatch();

  const inc = () => {
    dispatch(fetchUser({}));
  };
  console.log('=========================\n');
  return (
    <View>
      <Text>Users : {users}</Text>
      <Button title="Click to get all users " onPress={inc}></Button>
    </View>
  );
};

export default Home;
