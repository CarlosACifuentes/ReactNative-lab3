import React from "react";
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

export default class Regform extends React.Component {
render() {
    return (
        <View style={styles.regform}>
            <Text style={styles.header}>Registration</Text>

            <TextInput style = {styles.textinput} placeholder="Your name" placeholderTextColor= "#fff"
            underlineColorAndroid={'transparent'} />
           
            <TextInput style = {styles.textinput} placeholder="Email"  placeholderTextColor= "#fff"
            underlineColorAndroid={'transparent'} />
           
            <TextInput style = {styles.textinput} placeholder="Password"  placeholderTextColor= "#fff"
            secureTextEntry={true} underlineColorAndroid={'transparent'} />

            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.btntext}>Sign up</Text>
            </TouchableOpacity>
        
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  regform: {
      alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        fontSize: 15,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding:20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold',
  }
}
);