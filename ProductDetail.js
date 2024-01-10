// ProductDetail.js

// Importeer de nodige modules en componenten uit React en React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Definieer de ProductDetail-component met route als prop
const ProductDetail = ({ route }) => {
  // Haal het product op uit de route params
  const { product } = route.params;

  // Render de hoofdweergave van de ProductDetail-component
  return (
    <View style={styles.container}>
      {/* Afbeelding van het product */}
      <Image source={{ uri: product.productImage }} style={styles.productImage} />
      {/* Titel van het product */}
      <Text style={styles.productTitle}>{product.title}</Text>
      {/* Beschrijving van het product */}
      <Text style={styles.productDescription}>{product.description}</Text>
      {/* Prijs van het product */}
      <Text style={styles.productPrice}>Price: ${product.price}</Text>
      {/* Toon korting als het product in de aanbieding is */}
      {product.onSale && <Text style={styles.discountText}>Discount: {product.discountPercentage}% off</Text>}
      {/* Voeg hier andere productdetails toe */}
    </View>
  );
};

// Stijlen voor de ProductDetail-component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  discountText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 8,
  },
  // Voeg hier andere stijlen toe voor aanvullende productdetails
});

// Exporteer de ProductDetail-component als standaard
export default ProductDetail;
