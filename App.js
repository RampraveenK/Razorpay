import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const options = {
    description: 'Ready To Pay',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_q5aaR2PIMUnHeo', // Your api key
    amount: '100',
    name: 'FoodBeez',
    prefill: {
      email: 'void@razorpay.com',
      contact: '6382004559',
      name: 'Praveen',
    },
    theme: {color: '#FFBE00'},
  };

  function toPayHandler() {
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title={'Pay with Razorpay'} onPress={toPayHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
