import * as React from 'react';
import {StyleSheet,View,TouchableOpacity, Text,Image} from 'react-native'



export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
       
       <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('JokeScreen')}>
       <Text style={styles.buttonText}> Read a Joke </Text>
       </TouchableOpacity>
       </View>
       
       <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('NewScreen')}>
       <Text style={styles.buttonText}> The News </Text>
       </TouchableOpacity>
       </View>

       
       <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('Horoscope')}>
       <Text style={styles.buttonText}> Find your Horoscope </Text>
       </TouchableOpacity>
       </View>

        <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('WeatherScreen')}>
       <Text style={styles.buttonText}> What is the Weather </Text>
       </TouchableOpacity>
       </View>
      
      <View style={styles.ratingContainer}>
        <Text style={{ textAlign:'center', marginLeft:5, marginTop:15}}>Rate us</Text>
        <TouchableOpacity>
        <Image
         style={{
            witdh:-20,
            height:10,
            marginLeft:5,
            marginTop:-35
            }}
         source={require('../Thumbs/thumbsup.png')}
         />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={{
          witdh:50,
          hieght:50,
          marginTop:-35,
          marginLeft: 100
        }}
        source={require('../Thumbs/thumbsdown.png')}
        />
        </TouchableOpacity>
      </View>
      
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
     marginLeft:50,
     borderWidth:1,
     borderColor:'rgba(0,0,0,0.2)',
     alignItems:'center',
     justifyContent:'center',
     witdh: 50,
     height: 50,
     borderRadius: 100,
     marginTop:100,
     marginRight:50,
  }
})
  