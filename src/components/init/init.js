import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CustomButton } from '../common-button/common-button';

export const InitComponent = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Hello, Hardik 😎</Text>
      <Text style={{ paddingTop: 10, color: '#FFFFFF', fontSize: 15 }}>
        Made in React Native with ❤️
      </Text>

      <Text style={{ color: '#FFFFFF', marginTop: '10%' }}>
        A JOUNRNEY TO THE{' '}
        <Text style={{ color: 'red', fontSize: 20, fontWeight: '300' }}>
          CORE
        </Text>{' '}
        OF{' '}
        <Text style={{ color: 'red', fontSize: 20, fontWeight: '300' }}>
          REACT NATIVE
        </Text>
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: '300',
          marginTop: 10,
        }}>
        <Text style={{ color: 'red', paddingTop: 10 }}>DEMONS</Text> is here 😈
      </Text>
      <View style={{ display: 'flex', marginTop: '10%' }}>
        <CustomButton Label={'Explore'} Styles={styles.ButtonContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  HeaderText: {
    color: '#FFFFFF',
    fontSize: 40,
    marginTop: '50%',
  },
  ButtonContainer: {
    width: '22px',
    height: '22%',
    fontFamily: 'Chivo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
