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

/**
 * @description To chech for the last page in react query
 * @param number - last page number
 * @param array - array of pages
 * @returns true | undefined.
 */

export const checkForLastPage = (_lastPage, pages) => {
  return pages[pages.length - 1].results.length ? pages.length + 1 : undefined;
};
