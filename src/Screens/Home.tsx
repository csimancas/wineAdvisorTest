import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import RowUserItem from '../components/RowUserItem';
import useList from '../hooks/useList';

const Home = () => {
  const navigation: any = useNavigation();
  const {users} = useList();

  interface UserItem {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  }

  const renderItem = ({item}: {item: UserItem}) => (
    <RowUserItem
      item={item}
      action={() =>
        navigation.navigate('Details', {
          id: item.id,
        })
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
