import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface RowUserItemProps {
  item: {
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
  action?: () => void;
}

const RowUserItem: React.FC<RowUserItemProps> = ({item, action}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={action}>
      <View style={styles.itemsContainer}>
        <Image source={{uri: item.avatar}} style={styles.image} />

        <Text style={styles.buttonText}>
          {item.first_name} {item.last_name}
        </Text>
        <Image
          source={require('../assets/arrowRigth.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  image: {width: 50, height: 50, borderRadius: 50},
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    // marginVertical: 10,
  },
});

export default RowUserItem;
