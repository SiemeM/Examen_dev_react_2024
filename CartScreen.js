// CartScreen.js

// Importeer de nodige modules en componenten uit React en React Native
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Definieer de CartScreen-component met route als prop
const CartScreen = ({ route }) => {
  // Haal de cartItems op uit de route params
  const { cartItems } = route.params;

  // Render de hoofdweergave van de CartScreen
  return (
    <View style={styles.container}>
      {/* Titel van het winkelwagentje */}
      <Text style={styles.title}>Winkelwagentje</Text>
      {/* FlatList voor het weergeven van de winkelwagenitems */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // Weergave van elk item in de winkelwagen
          <View style={styles.cartItem}>
            {/* Titel van het item */}
            <Text>{item.title}</Text>
            {/* Prijs van het item */}
            <Text>{`Prijs: $${item.price}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Stijlen voor de CartScreen-component
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
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

// Exporteer de CartScreen-component als standaard
export default CartScreen;
