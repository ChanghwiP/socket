import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {

    state = {message: ''}
   
    updateMessage = message => {
       this.setState({ message: message })
    }
 
    render() {
       return (
          <View>
             <Picker selectedValue = {this.state.message} onValueChange = {this.updateMessage}>
                <Picker.Item label = "조금 조용히 얘기해주세요" value = "조금 조용히 얘기해주세요" />
                <Picker.Item label = "전화는 밖에서 부탁드립니다" value = "전화는 밖에서 부탁드립니다" />
                <Picker.Item label = "발소리 조금만 줄여주세요" value = "발소리 조금만 줄여주세요" />
                <Picker.Item label = "새벽에 샤워는 자제해주세요" value = "새벽에 샤워는 자제해주세요" />
                <Picker.Item label = "넵, 죄송합니다" value = "넵, 죄송합니다" />
                <Picker.Item label = "감사합니다" value = "감사합니다" />
             </Picker>
                
                <Text style = {styles.text}>{this.state.message}</Text>
 
          </View>
       )
    }
 }
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 25,
      alignSelf: 'center',
      color: 'black'
   },
   inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:40,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginRight:10,
    },
})