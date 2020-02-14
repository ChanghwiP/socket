import React, {Component} from "react";
import {  
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Picker
} from "react-native";

import io from "socket.io-client"; 

import PickerExample from './components/picker';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       chatMessage: "",
       chatMessages: []
    };
  }

  componentDidMount() {
    this.socket = io("http://203.252.99.231:51235");
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ""});
  }



  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>

        <FlatList style={styles.list}/>

        <View style={[styles.balloon]}>
          {chatMessages}
        </View>


        <Picker
           selectedValue={this.state.chatMessage}
           onValueChange={(itemValue, itemIndex) => this.setState({chatMessage: itemValue})} >

          <Picker.Item label = "조금 조용히 얘기해주세요" value = "조금 조용히 얘기해주세요" />
          <Picker.Item label = "전화는 밖에서 부탁드립니다" value = "전화는 밖에서 부탁드립니다" />
          <Picker.Item label = "발소리 조금만 줄여주세요" value = "발소리 조금만 줄여주세요" />
          <Picker.Item label = "새벽에 샤워는 자제해주세요" value = "새벽에 샤워는 자제해주세요" />
          <Picker.Item label = "넵, 죄송합니다" value = "넵, 죄송합니다" />
          <Picker.Item label = "감사합니다" value = "감사합니다" />
        </Picker>


        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="type here..."
                underlineColorAndroid='transparent'
                autoCorrect={false}
                value={this.state.chatMessage}
                onSubmitEditing={() => this.submitChatMessage()}
                onChangeText={chatMessage => {
                  this.setState({chatMessage});
                }}
            />
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Button title="send" color="#ffffff" onPress={chatMessage => this.submitChatMessage()} />
            </TouchableOpacity>

        </View>

        
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 35,
    backgroundColor: '#F5FCFF',
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:70,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
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
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
}); 