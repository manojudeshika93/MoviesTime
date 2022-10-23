import React from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './MoviesTemplate.style';
import {Text} from '../../atoms';
import {MovieCard} from '../../organisms';
import {colors} from '../../../constants/colors';

const DUMMY_DATA = [
  {
    poster_path:
      'https://www.themoviedb.org/t/p/w1280/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    adult: false,
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    release_date: '1994-09-10',
    genre_ids: [18, 80],
    id: 278,
    original_title: 'The Shawshank Redemption',
    original_language: 'en',
    title: 'The Shawshank Redemption',
    backdrop_path: '/xBKGJQsAIeweesB79KC89FpBrVr.jpg',
    popularity: 6.741296,
    vote_count: 5238,
    video: false,
    vote_average: 8.32,
  },
];

export const MoviesTemplate = () => {
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
        data={DUMMY_DATA}
        renderItem={renderCard}
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
      />
    </View>
  );
};
