import React from 'react';
import {Image, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import useDetail from '../hooks/useDetail';

const DetailScreen = () => {
  interface UserTypes {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  const {userData}: {userData: UserTypes} = useDetail();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: userData ? userData.avatar : ''}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.rowStyle}>
          <Text style={styles.textTitle}>Nombre completo:</Text>
          <Text
            style={
              styles.textSubTitle
            }>{` ${userData.first_name} ${userData.last_name}`}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.textTitle}>Correo electronico:</Text>
          <Text style={styles.textSubTitle}>{` ${userData.email} `}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'column',
    aligneItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    height: 100,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    elevation: 3,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  rowStyle: {
    flexDirection: 'row',
  },

  textTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {width: 150, height: 150, borderRadius: 150},
});

export default DetailScreen;
