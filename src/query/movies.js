import {useInfiniteQuery} from '@tanstack/react-query';

import {checkForLastPage} from '../utils/helpers';
import {getRatedMovies} from '../api/movies';

export const RATED_MOVIES = 'rated-movies';

export const useRatedMovies = (onSuccess, onError) => {
  return useInfiniteQuery(
    [RATED_MOVIES],
    ({page = 1}) => getRatedMovies(page),
    {
      getNextPageParam: (_lastPage, pages) =>
        checkForLastPage(_lastPage, pages),
      onSuccess,
      onError,
      cacheTime: 0,
    },
  );
};
