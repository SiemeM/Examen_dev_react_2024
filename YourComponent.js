// YourComponent.js

// Importeer de nodige modules en componenten
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios'; // Axios wordt gebruikt voor het maken van HTTP-verzoeken
import ProductList from './ProductList'; // Importeer de ProductList-component
import CheckoutScreen from './CheckoutScreen'; // Importeer de CheckoutScreen-component
import { useNavigation } from '@react-navigation/native'; // React Navigation-hook voor navigatiefuncties

// Definieer de hoofdcomponent van de app
const YourComponent = () => {
  // API-URL voor het ophalen van productgegevens
  const apiUrl = 'http://webshop.ddev.site/api/products';

  // State hooks voor het bijhouden van producten, prijsfilter, winkelwagenitems en navigatiefuncties
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState(null);
  const navigation = useNavigation(); // Haal de navigatie-hook op

  const [cartItems, setCartItems] = useState([]);

  // Functie om productgegevens op te halen van de API
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data.items);
    } catch (error) {
      console.error('Er is een fout opgetreden bij het ophalen van de gegevens:', error);
    }
  };

  // Gebruik de useEffect-hook om de fetchData-functie bij het laden van de component uit te voeren
  useEffect(() => {
    fetchData();
  }, []);

  // Functie om prijsfilter toe te passen
  const applyPriceFilter = (minPrice, maxPrice) => {
    setPriceFilter({ minPrice, maxPrice });
  };

  // Functie om prijsfilter te wissen
  const clearPriceFilter = () => {
    setPriceFilter(null);
  };

  // Functie om product aan winkelwagen toe te voegen en navigeer naar het winkelwagenscherm
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    navigation.navigate('Cart', { cartItems: [...cartItems, product] });
  };

  // Functie om naar het checkout-scherm te navigeren
  const goToCheckout = () => {
    navigation.navigate('Checkout', { cartItems });
  };

  // Filter de producten op basis van het prijsbereik
  const filteredProducts = priceFilter
    ? products.filter(
        (product) => product.price >= priceFilter.minPrice && product.price <= priceFilter.maxPrice
      )
    : products;

  // Render de hoofdweergave van de app
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {/* Knoppen voor verschillende prijsfilters */}
        <TouchableOpacity style={styles.filterButton} onPress={() => applyPriceFilter(0, 150)}>
          <Text style={styles.filterButtonText}>0 - 150</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => applyPriceFilter(150, 300)}>
          <Text style={styles.filterButtonText}>150 - 300</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => applyPriceFilter(300, Infinity)}>
          <Text style={styles.filterButtonText}>+300</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={clearPriceFilter}>
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
      </View>

      {/* Toon de productlijst op basis van het prijsfilter */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/* Knop voor het navigeren naar het winkelwagenscherm */}
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart', { cartItems })}>
        <Text style={styles.cartButtonText}>Winkelwagentje</Text>
      </TouchableOpacity>

      {/* Knop voor het navigeren naar het checkout-scherm */}
      <TouchableOpacity style={styles.checkoutButton} onPress={goToCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

// Stijlen voor de component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    flex: 1,
    backgroundColor: '#3b444b',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  filterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  cartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Stijlen voor de Checkout-knop
  checkoutButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// Exporteer de component als standaard
export default YourComponent;
