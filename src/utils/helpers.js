import {showMessage} from 'react-native-flash-message';

/**
 * @description To produce common flash message
 * @param type String - success | danger | warning
 * @param message String - flash message
 */
export const makeToast = (type, message) => {
  showMessage({
    type,
    message,
    icon: 'auto',
    duration: 2000,
  });
};
