import React from "react";

import { StyleSheet, View, Text, ScrollView} from "react-native";

import Header from '../../Components/Header';
import OrderCard from '../../Components/OderCard';

export default function Orders() {

  return (
    <>
      <Header />
        <ScrollView style={styles.container}>
          <OrderCard /> 
          <OrderCard /> 
          <OrderCard /> 
          <OrderCard /> 
          <OrderCard /> 
        </ScrollView> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});
