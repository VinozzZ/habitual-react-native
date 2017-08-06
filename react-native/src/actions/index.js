import axiosReq from '../helpers/axiosRequest';
import {Actions} from 'react-native-router-flux'
import {EMAIL_CHANGED, NAME_CHANGED, PASSWORD_CHANGED, CONFIRM_PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, GET_HABITS_LIST, GET_HABITS_SUCCESS, GET_HABITS_FAIL, HABIT_CHECK_IN, HABIT_CHECK_IN_SUCCESS, HABIT_CHECK_IN_FAIL} from './types'

const habitsAPI = 'http:/test.iamdrewt.net/'
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};
export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};
export const loginUser = ({ email, password }) => {
  console.log(email);
  return (dispatch) => {
    dispatch({type: LOGIN_USER})
    const dataObj = {'email': email, 'password': password};
    axiosReq('POST', habitsAPI + 'mobileLogin', dataObj)
      .then((response)=>{
        console.log(response.data.msg);
        if(response.data.msg === 'loginSuccess'){
          loginUserSuccess(dispatch, response)
        // }else{
        //   loginUserFail(dispatch)
        }
      })
      .catch(()=>console.log('loginfail'))
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
};


const loginUserSuccess = (dispatch, user) => {
  dispatch({type: LOGIN_USER_SUCCESS,
    payload: user})
    Actions.main();
}

export const registerUser = ({email, password, name}) => {
  // console.log(password);
  return (dispatch) => {
    dispatch({type: REGISTER_USER})
    const dataObj = {'email': email, 'password': password, 'userName': name};
    axiosReq('POST', habitsAPI + 'mobileRegister', dataObj)
      .then((response)=>{
        // console.log(response);
        if(response.data.msg === 'userInserted' || response.data.msg === 'userPasswordUpdatedForMobile'){
          registerUserSuccess(dispatch, response)
        }else{
          registerUserFail(dispatch)
        }
      })
      .catch(()=>registerUserFail(dispatch))
  }
}

export const registerUserFail = (dispatch) =>{
    dispatch({type: REGISTER_USER_FAIL});
}

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  })
  Actions.main()
}

export const getHabits = (token)=> {
  console.log(token)
  const usertoken = {'token': token}
  // console.log(usertoken)
  return(dispatch)=> {
    axiosReq('POST', habitsAPI + 'getMyHabitList', usertoken)
      .then((response)=>{
        var list = response.data.results;
        // console.log(list)
        if (response.data.msg === 'NoHabitJoined'){
          getCategoryList(dispatch)
        } else {
            listUserHabits(dispatch, list)
        }
      })
      .catch(()=> {
        getHabitsFail(dispatch)
      }) 
  }
}


const getHabitsFail = (dispatch)=> {
  dispatch({type: GET_HABITS_FAIL 
  })
}

const getCategoryList = ()=> {
    dispatch({
      type: GET_CATEGORY_LIST
    })
    axiosReq('GET', habitsAPI + 'categorylist')
      .then((response)=> {
        getCategorySuccess(dispatch, response)
      })
      .catch(()=> getCategoryFail(dispatch))
}


export const listUserHabits = (dispatch, list)=> {
  console.log(list)
  const userHabits = []
  list.map((object)=> {
    userHabits.push(object.name.charAt(0).toUpperCase() + object.name.slice(1))
    // console.log(userHabits)
  })
  // console.log(userHabits);
dispatch({
    type: GET_HABITS_SUCCESS,
    payload: userHabits
  })
}

const getCategorySuccess = (dispatch, response)=>{
  const categorylist = []
    response.data.map((category)=> {
      categorylist.push(category)
    })
dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: categorylist
    })
}

const getCategoryFail = (dispatch)=> {
  dispatch({type: GET_CATEGORY_FAIL})
}

export const checkInMyHabit = (token, habitName)=>{
  const dataObj = {'token': token, 'habitName': habitName}
  return(dispatch)=> {
    dispatch({
      type: HABIT_CHECK_IN
    })
    axiosReq('POST', habitsAPI + 'checkinMyHabit', dataObj )
      .then((response)=>{
        if(response.data.error !== undefined){
          dispatch({
            type:HABIT_CHECK_IN_FAIL,
          })
        }
        else{
          dispatch({
            type: HABIT_CHECK_IN_SUCCESS,
            payload: response.data.rank
          })
        }
      })
      .catch((error)=> {
        console.log(error);
        dispatch({
          type:HABIT_CHECK_IN_FAIL,
        })
      })

  }
}

export const leaveHabit = (token, habitName)=>{
  const dataObj = {'token': token, 'habitName': habitName}
  return(dispatch)=> {
    dispatch({
      type: LEAVE_HABIT
    })
    axiosReq('POST', habitsAPI + 'leaveHabit', dataObj)
      .then((response)=>{
        if(response.data.error !== undefined){
          dispatch({
            type:LEAVE_HABIT_FAIL
          })
        }
        else{
          dispatch({
            type: LEAVE_HABIT_SUCCESS
          })
        }
      })
      .catch((error)=> {
        console.log(error);
        dispatch({
          type:LEAVE_HABIT_FAIL,
        })
      })

  }
}
