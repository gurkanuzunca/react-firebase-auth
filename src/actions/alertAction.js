import * as actions from './types';


/**
 * Sispatch ile çalıştırılacak olan eventlar için kullanılyor. Dispatch objesini hazırlayan yardımcı fonksiyonlar.
 * Dispatch ile bir action fırlatıldığında, o action ile ilgili yapılması gereken state güncellemesi payload da tanımlanıyor.
 * Reducer de gerekli güncelleme yapılıyor.
 */

export const clearAlert = () => dispatch => {
  dispatch({
    type: actions.CLEAR_ALERT,
  });
}