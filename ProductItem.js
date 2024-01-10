// ProductItem.js

// Importeer de nodige modules en componenten uit React en React Native
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Definieer de ProductItem-component met item, productWidth en addToCart als props
const ProductItem = ({ item, productWidth, addToCart }) => {
  // Haal de navigatie-instantie op met behulp van useNavigation
  const navigation = useNavigation();

  // Render de ProductItem-component
  return (
    // Maak een TouchableOpacity om naar het ProductDetail-scherm te navigeren bij tikken op het product
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <View style={[styles.productContainer, { width: productWidth }]}>
        {/* Afbeelding van het product */}
        <Image source={{ uri: item.productImage }} style={styles.productImage} />
        {/* Titel van het product */}
        <Text style={styles.productTitle}>{item.title}</Text>
        {/* Prijs van het product */}
        <Text style={styles.productPrice}>Price: ${item.price}</Text>
        {/* Toon korting als het product in de aanbieding is */}
        {item.onSale && <Text style={styles.discountText}>Discount: {item.discountPercentage}% off</Text>}
        {/* Voeg-toe-aan-winkelmandje knop */}
        <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
          <Text style={styles.addToCartButtonText}>Voeg toe aan winkelmandje</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// Stijlen voor de ProductItem-component
const styles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productContainer: {
    paddingHorizontal: 5,
    paddingBottom: 0,
  },
  productTitle: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
  },
  productPrice: {
    marginBottom: 5,
    fontSize: 16,
  },
  discountText: {
    color: 'red',
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// Exporteer de ProductItem-component als standaard
export default ProductItem;
