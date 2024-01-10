// CheckoutScreen.js

// Importeer de nodige modules en componenten
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definieer de CheckoutScreen-component met props
const CheckoutScreen = ({ route }) => {
  // Haal de cartItems op uit de route-props
  const { cartItems } = route.params;

  // Functie om het totaal van de winkelwagenitems te berekenen
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Render de hoofdweergave van de CheckoutScreen
  return (
    <View style={styles.container}>
      {/* Titel van het CheckoutScreen */}
      <Text style={styles.title}>Checkout</Text>
      {/* Bedankbericht */}
      <Text style={styles.checkoutText}>Bedankt voor uw bestelling!</Text>
      {/* Weergave van winkelwagenitems */}
      <Text style={styles.checkoutText}>Uw winkelwagentje bevat de volgende items:</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={styles.cartItem}>
          <Text>{item.title}</Text>
          <Text>{`Prijs: $${item.price}`}</Text>
        </View>
      ))}
      
      {/* Totaal van alle artikelen */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Totaal:</Text>
        <Text style={styles.totalAmount}>{`$${calculateTotal()}`}</Text>
      </View>
    </View>
  );
};

// Stijlen voor de CheckoutScreen-component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkoutText: {
    fontSize: 18,
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
  },
});

// Exporteer de CheckoutScreen-component als standaard
export default CheckoutScreen;
