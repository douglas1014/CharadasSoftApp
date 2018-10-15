import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import CategorieCard from '../components/CategorieCard'
import charadas from '../../charadas.json';

// const isEven = number => number % 2 === 0;
console.log('charadas: ', charadas);
const CategoriesPage = props => (
  <View style={styles.container}>
    <StatusBar 
      backgroundColor='#F07E26'
    />
    <FlatList
      data={charadas}
      renderItem={({ item, index }) => (
        <CategorieCard
          categorie={item}
          onNavigate={() => props.navigation.navigate('GamePage', { categorie: item })}
        />
      )}
      keyExtractor={item => item.title}
      numColumns={2}
      ListHeaderComponent={props => (
        <View style={styles.marginTop} />
      )}
      ListFooterComponent={props => (
        <View style={styles.marginBottom} />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 5
  },
  marginBottom: {
    marginBottom: 5
  }
})

export default CategoriesPage;
