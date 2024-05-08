import { FlatList, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

// props del componente flatList:
// data: es la funte de elementos que debe representar el archivo, esta propiedad acepta un array de elementos para ser representados.
// renderItem: esta propiedad toma un elemento y devuelve un componente que se renderiza en la pantalla.
// keyExtractor: cada elemento debe tener una clave única. Esta clave se proporciona a la propiedad junto con la lista de componentes que se van a renderizar.    

export default function App() {

  const data = [
    {id: 1, text: 'text1'},
    {id: 2, text: 'text2'},
    {id: 3, text: 'text3'},
    {id: 4, text: 'text3'},
    {id: 5, text: 'text5'},
    {id: 6, text: 'text6'},
    {id: 7, text: 'text7'},
    {id: 8, text: 'text8'},
    {id: 9, text: 'text9'},
    {id: 10, text: 'text10'},
    {id: 11, text: 'text11'},
    {id: 12, text: 'text12'},
  ]
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item})=>(
        <View style = {styles.box}>
          <Text>{item.text}</Text>
        </View>
      )}
      
      //horizontal
      showsVerticalScrollIndicator = {false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    borderWidth: 3,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'green'
    
  }
});
