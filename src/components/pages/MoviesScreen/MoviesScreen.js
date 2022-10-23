import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import _ from 'lodash';

import {styles} from './MoviesScreen.style';
import {Text, Loader} from '../../atoms';
import {MovieCard} from '../../organisms';
import {colors} from '../../../constants/colors';
import {makeToast} from '../../../utils/helpers';
import {useRatedMovies} from '../../../query/movies';

export const MoviesScreen = () => {
  const [moviesData, setMoviesData] = useState([]);

  const dataRetrieveSuccess = data => {
    let movies = [];
    if (!_.isEmpty(data?.pages[0]) && data) {
      data?.pages.map(page => {
        page.data.map(item => movies.push(item));
      });
    }
    setMoviesData(movies);
  };

  const dataRetrieveError = () => {
    makeToast('warning', 'Failed to retrieve data');
  };

  const {
    isLoading: isLoadingData,
    fetchNextPage: dataFetchNexPage,
    isFetchingNextPage: isDataFetchingNextPage,
    hasNextPage: dataHasNextPage,
    refetch: dataRefetch,
  } = useRatedMovies(dataRetrieveSuccess, dataRetrieveError);

  const renderCard = ({item, index}) => {
    return <MovieCard item={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text
          fontSize={23}
          fontWeight="bold"
          lineHeight={25}
          color={colors.white}>
          Top Rated Movies
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={moviesData}
        renderItem={renderCard}
        onRefresh={() => {
          dataRefetch();
        }}
        refreshing={isLoadingData}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text
              fontSize={16}
              fontWeight="bold"
              color={colors.black}
              lineHeight={21}>
              No data available...
            </Text>
          </View>
        }
        ListFooterComponent={isDataFetchingNextPage && <Loader />}
        onEndReached={() => dataHasNextPage && dataFetchNexPage()}
        onEndReachedThreshold={0.6}
      />
    </View>
  );
};
