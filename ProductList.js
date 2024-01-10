// ProductList.js

// Importeer de nodige modules en componenten uit React en React Native
import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import ProductItem from './ProductItem';

// Definieer de ProductList-component met products en addToCart als props
const ProductList = ({ products, addToCart }) => {
  // Haal de breedte van het scherm op met behulp van Dimensions
  const screenWidth = Dimensions.get('window').width;
  // Bereken de breedte van elk product in de lijst
  const productWidth = (screenWidth - 40) / 2;

  // Render de ProductList-component met FlatList
  return (
    <FlatList
      // Geef de producten door als data aan de FlatList
      data={products}
      // Geef een unieke key aan elk item in de lijst
      keyExtractor={(item, index) => index.toString()}
      // Stel de FlatList in om verticaal weer te geven met twee kolommen
      horizontal={false}
      numColumns={2}
      // Render elk item met behulp van de ProductItem-component
      renderItem={({ item }) => <ProductItem item={item} productWidth={productWidth} addToCart={addToCart} />}
    />
  );
};

// Exporteer de ProductList-component als standaard
export default ProductList;
