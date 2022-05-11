import { StyleSheet, View, Image, Text } from 'react-native';
// import ImageRover from './components/ImageRover';

export default function App() {
  return (
    // <ImageRover/>
      <View style = {styles.imgContainer}>
        <Image style = {styles.roverImg} source={require('./assets/rover.jpg')}></Image>
        <Text style = {styles.roverText}>Le rover Opportunity</Text>
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

  roverImg:{
    width : 300,
    height : 300,
},
  
imgContainer:{
    flexDirection : "row",
},

roverText:{
  flex : 3,
  marginLeft : 10,
  alignSelf : "center",
}

});
