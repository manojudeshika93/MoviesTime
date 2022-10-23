import {createHttpClient} from './httpClient';
import {HTTP_METHOD} from '../constants/constants';
import {API_KEY} from '@env';

export const getRatedMovies = page => {
  return createHttpClient(
    `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    {},
    HTTP_METHOD.GET,
  );
};
