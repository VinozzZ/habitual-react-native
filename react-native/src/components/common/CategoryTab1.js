import React, { Component } from 'react';
import {ListView, Alert} from 'react-native'
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Left, Right, Body } from 'native-base';
export default class ListHeaderExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem >
                <Left style={{flex: 1, alignItems: 'flex-start', paddingLeft: 10}}>
                  <Button full onPress={()=>
                    Alert.alert(
                      'Add Running to your habits?',
                      '',
                      [
                        {text: 'Cancel', onPress: ()=>{console.log("alert button")}},
                        {text: 'OK', onPress: () => {
                          this.checkInPressed(data);
                        }},
                      ],
                      { cancelable: false }
                    )} style={{backgroundColor: "#48A9A6", opacity: 0.9}} >
                    <Icon name="add"/>
                  </Button>
                </Left>
                <Right style={{flex: 3, paddingRight: 10}}>
                  <Text style={{fontSize:20, fontWeight: '500', alignSelf: 'center'}}>
                    Running
                  </Text>
                </Right>
              </ListItem>
            <ListItem >
                <Left style={{flex: 1, alignItems: 'flex-start', paddingLeft: 10}}>
                  <Button full onPress={()=>
                    Alert.alert(
                      'Add Swimming to your habits?',
                      '',
                      [
                        {text: 'Cancel', onPress: ()=>{console.log("alert button")}},
                        {text: 'OK', onPress: () => {
                          this.checkInPressed(data);
                        }},
                      ],
                      { cancelable: false }
                    )} style={{backgroundColor: "#48A9A6", opacity: 0.9}} >
                    <Icon name="add"/>
                  </Button>
                </Left>
                <Right style={{flex: 3, paddingRight: 10}}>
                  <Text style={{fontSize:20, fontWeight: '500', alignSelf: 'center'}}>
                    Swimming
                  </Text>
                </Right>
              </ListItem>
            <ListItem >
                <Left style={{flex: 1, alignItems: 'flex-start', paddingLeft: 10}}>
                  <Button full onPress={()=>
                    Alert.alert(
                      'Add Walking to your habits?',
                      '',
                      [
                        {text: 'Cancel', onPress: ()=>{console.log("alert button")}},
                        {text: 'OK', onPress: () => {
                          this.checkInPressed(data);
                        }},
                      ],
                      { cancelable: false }
                    )} style={{backgroundColor: "#48A9A6", opacity: 0.9}} >
                    <Icon name="add"/>
                  </Button>
                </Left>
                <Right style={{flex: 3, paddingRight: 10}}>
                  <Text style={{fontSize:20, fontWeight: '500', alignSelf: 'center'}}>
                    Walking
                  </Text>
                </Right>
              </ListItem>
            <ListItem >
                <Left style={{flex: 1, alignItems: 'flex-start', paddingLeft: 10}}>
                  <Button full onPress={()=>
                    Alert.alert(
                      'Add Playing Sports to your habits?',
                      '',
                      [
                        {text: 'Cancel', onPress: ()=>{console.log("alert button")}},
                        {text: 'OK', onPress: () => {
                          this.checkInPressed(data);
                        }},
                      ],
                      { cancelable: false }
                    )} style={{backgroundColor: "#48A9A6", opacity: 0.9}} >
                    <Icon name="add"/>
                  </Button>
                </Left>
                <Right style={{flex: 3, paddingRight: 10}}>
                  <Text style={{fontSize:20, fontWeight: '500', alignSelf: 'center'}}>
                    Playing Sports
                  </Text>
                </Right>
              </ListItem>
            <ListItem >
                <Left style={{flex: 1, alignItems: 'flex-start', paddingLeft: 10}}>
                  <Button full onPress={()=>
                    Alert.alert(
                      'Add Martial Arts to your habits?',
                      '',
                      [
                        {text: 'Cancel', onPress: ()=>{console.log("alert button")}},
                        {text: 'OK', onPress: () => {
                          this.checkInPressed(data);
                        }},
                      ],
                      { cancelable: false }
                    )} style={{backgroundColor: "#48A9A6", opacity: 0.9}} >
                    <Icon name="add"/>
                  </Button>
                </Left>
                <Right style={{flex: 3, paddingRight: 10}}>
                  <Text style={{fontSize:20, fontWeight: '500', alignSelf: 'center'}}>
                    Martial Arts
                  </Text>
                </Right>
              </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}