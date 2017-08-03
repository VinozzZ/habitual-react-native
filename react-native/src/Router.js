import React from 'react'
import {Scene, Router, Actions} from 'react-native-router-flux'
import {Platform} from 'react-native'

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import HabitsList from './components/HabitsList'
import AddHabit from './components/AddHabit'
import NavBar from './components/common/NavBar'

const RouterComponent = () => {
  return(
    <Router >

      <Scene key="auth1">

        <Scene onRight={()=> Actions.auth2()} key='login' component={LoginForm} title="Welcome" rightTitle="Register" navigationBarStyle={{backgroundColor: 'transparent', paddingTop: (Platform.OS === 'android') ? 14 : 0, paddingBottom: (Platform.OS === 'android') ? 24 : 0, borderColor: 'transparent'}} />
      </Scene>
      <Scene key="auth2">
        <Scene onRight={()=> Actions.auth1()} key='register' component={RegisterForm} title="Welcome" rightTitle="Log In" navigationBarStyle={{backgroundColor: 'transparent', paddingTop: (Platform.OS === 'android') ? 14 : 0}} />
      </Scene>
      
      <Scene    key="main" title="Habits" >
        <Scene key='habitsList' title="Habits" component={HabitsList} onRight={()=> Actions.addHabit()} rightTitle="Add" navigationBarStyle={{backgroundColor:"#48A9A6", opacity: 0.8, paddingTop: (Platform.OS === 'android') ? 14 : 0, paddingBottom: (Platform.OS === 'android') ? 24 : 0, borderColor: 'transparent'}} />
        <Scene key="addHabit" component={AddHabit} title="Add habit" navigationBarStyle={{backgroundColor:"#48A9A6", opacity: 0.8, paddingTop: (Platform.OS === 'android') ? 14 : 0, paddingBottom: (Platform.OS === 'android') ? 24 : 0, borderColor: 'transparent'}}>

        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent