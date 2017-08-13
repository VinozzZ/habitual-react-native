import axiosReq from '../helpers/axiosRequest';
<<<<<<< HEAD
=======
import {Actions} from 'react-native-router-flux';
>>>>>>> 59bcce3a73c3e4256ee12237fe263bbcd851bc9e
import habitsAPI from '../habitsAPI';
import {JOIN_HABIT, JOIN_HABIT_SUCCESS, JOIN_HABIT_FAIL} from '../types';

export const joinAHabit = (token, habitName)=>{
  habitName = habitName.toLowerCase();
  var dataObj = {'token': token, 'habitName': habitName}
  return (dispatch)=>{
    dispatch({
      type: JOIN_HABIT
    })
    axiosReq('POST', habitsAPI + 'joinAHabit', dataObj)
    .then((response)=>{
      console.log(response.data)
      if(response.data === 'existedUserHabit'){
        dispatch({type: JOIN_HABIT_FAIL, payload: `You already joined ${habitName}`})
      }else{
        dispatch({type: JOIN_HABIT_SUCCESS, payload: {'rank':response.data.rank, 'msg': `You successfully joined ${habitName}`}})
      }
    })
    .catch(()=>{
      dispatch({type: JOIN_HABIT_FAIL, payload: `Joining ${habitName} failed`})
    })
  }
}