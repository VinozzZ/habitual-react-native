import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Image, Platform, StyleSheet, Alert, View} from 'react-native'
import {connect} from 'react-redux'
import HabitItems from './habitItems';
import {Container, Content, Header, Card, Form, Item, Input, Label, Icon, Button, Text, Spinner, Left, Right, Body, Title, List, ListItem, Thumbnail} from 'native-base'
import {Actions} from 'react-native-router-flux'
import { Font } from 'expo'
import {getHabitsFromCategory} from '../../actions/habitsActions'

class HabitsList extends Component{
  constructor(){
    super()
    this.state = {
      isReady: false,
      listUpdated: false,
    }

    this.renderAlert = this.renderAlert.bind(this);
    this.renderEmpty = this.renderEmpty.bind(this)
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    this.setState({isReady: true })
  }


  componentWillMount() {
      if(this.props.categoryName !== undefined){
        this.props.getHabitsFromCategory(this.props.categoryName);
      }else{
        this.props.getUserHabits(this.props.user.data.token)
      }
  }

  renderEmpty(){
    if (this.props.error.length > 0){
      return (
        <Button disabled full><Text>{this.props.error}</Text></Button>
        )
    }   
  }

  renderAlert(message){
      return (
       Alert.alert(
          message,
          '',
          [
            {text: 'OK', onPress: () => {
              // Actions.habitsList()
            }},
          ],
          { cancelable: false }
        )
      )
  }
  render(){


    if (!this.state.isReady) {
    
      return <Spinner style={{flex: 1, alignSelf: 'center'}} />;
    }
    if(this.props.categoryName !== undefined){
      return <HabitItems props={this.props.habits} allProps={this.props} MyHabitListAlert={this.renderAlert} add={true}/>
    }
    else{
      return (  
        <Container style={{paddingTop: 64}}>
        <Image source={require('../../images/bgnd8.png')} style={{flex: 1, width: null, height: null, resizeMode: "cover"}}>
        
          <HabitItems  props={this.props.userHabits} MyHabitListAlert={this.renderAlert} allProps={this.props}/>
          </Image>
          </Container>
      )
    }
  }
}

const mapStateToProps = ({habitsListInfo, auth}) => {
  const {habits, userHabits, categories, error, loading, message} = habitsListInfo
  const {user} = auth

  return { habits, userHabits, categories, error, loading, user, message}
}

export default connect(mapStateToProps, {getHabitsFromCategory})(HabitsList)