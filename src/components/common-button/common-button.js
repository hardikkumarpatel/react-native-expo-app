import React from 'react';
import { Button } from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  ButtonContainer: {
    width: 250,
    height: 150,
    padding: 30,
    borderRadius: 100,
    fontSize: 12,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
export const CustomButton = ({ Label }) => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.ButtonContainer}>
        <Button title={Label}></Button>
      </TouchableOpacity>
    </ScrollView>
  );
};
