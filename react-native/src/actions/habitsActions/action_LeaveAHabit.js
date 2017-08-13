import axiosReq from '../helpers/axiosRequest';
<<<<<<< HEAD
=======
import {Actions} from 'react-native-router-flux';
>>>>>>> 59bcce3a73c3e4256ee12237fe263bbcd851bc9e
import habitsAPI from '../habitsAPI';
import {LEAVE_HABIT, LEAVE_HABIT_FAIL, LEAVE_HABIT_SUCCESS} from '../types';

export const leaveHabit = (token, habitName)=>{
  habitName = habitName.toLowerCase();
  const dataObj = {'token': token, 'habitName': habitName}
  return(dispatch)=> {
    dispatch({
      type: LEAVE_HABIT
    })
    axiosReq('POST', habitsAPI + 'leaveHabit', dataObj)
      .then((response)=>{
        console.log(response);
        if(response.data.error === undefined){
          dispatch({
            type:LEAVE_HABIT_SUCCESS
          })
        }
        else{
          dispatch({
            type: LEAVE_HABIT_FAIL
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
