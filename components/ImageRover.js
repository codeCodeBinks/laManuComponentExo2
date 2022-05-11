import { View, Text, StyleSheet, Image } from "react-native"


function ImageRover() {
  return (
    <View style = {styles.imgContainer}>
        <Image style = {styles.roverImg} source={require('../assets/rover.jpg')}></Image>
        <Text style = {styles.roverText}>Le rover Opportunity</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})



export default ImageRover

