import * as actions from './types';
import { auth } from '../services/firebase';


/**
 * Sispatch ile çalıştırılacak olan eventlar için kullanılyor. Dispatch objesini hazırlayan yardımcı fonksiyonlar.
 * Dispatch ile bir action fırlatıldığında, o action ile ilgili yapılması gereken state güncellemesi payload da tanımlanıyor.
 * Reducer de gerekli güncelleme yapılıyor.
 */

export const userStateChanged = (user) => dispatch => {
  dispatch({
    type: actions.USER_STATE_CHANGED,
    payload: {
      user: user ? user.email : null
    }
  })
}

export const signOut = () => dispatch => {
  auth.signOut()
    .then(() => {
      dispatch({
        type: actions.SIGNED_OUT
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.SET_ERROR_ALERT,
        payload: {
          message: error.message
        }
      });
    });
}

export const signIn = (email, password) => dispatch => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      dispatch({
        type: actions.SIGNED_IN,
        payload: {
          user: userCredential.user.email
        }
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.SET_ERROR_ALERT,
        payload: {
          message: error.message
        }
      });
    });
}

export const signUp = (email, password) => dispatch => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
      dispatch({
        type: actions.SIGNED_IN,
        payload: {
          user: userCredential.user.email
        }
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.SET_ERROR_ALERT,
        payload: {
          message: error.message
        }
      });
    });
    
}

