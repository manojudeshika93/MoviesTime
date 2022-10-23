import React from 'react';
import {View, Linking} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './MovieCard.style';
import {Text, Card} from '../../atoms';
import {MovieProgressCard} from '../../molecules';
import {colors} from '../../../constants/colors';

export const MovieCard = ({item, index}) => {
  return (
    <View style={styles.container}>
      <Card
        onClick={() =>
          Linking.openURL(
            `https://www.youtube.com/results?search_query=${item.title}`,
          )
        }>
        <View style={styles.cardContainer}>
          <MovieProgressCard
            value={Math.round(item.vote_average * 10)} // popularity attribute is not suitable as the response, so i used vote_average
            source={{
              uri: 'https://www.themoviedb.org/t/p/w1280' + item.poster_path,
            }}
          />
          <View style={styles.textContainer}>
            <Text fontWeight="bold">
              #{index + 1} {item.original_title}
            </Text>
            <Text
              fontSize={16}
              fontWeight="bold"
              fontStyle="italic"
              color={colors.gray}>
              {'(' + item.title + ')'}
            </Text>
            <View style={styles.rowContainer}>
              <Text fontSize={16} color={colors.gray}>
                {item.release_date} {'(' + item.original_language + ')'} .{' '}
              </Text>
              <Text fontSize={16} color={colors.gray} borderWidth={1}>
                {item.adult ? 'R' : 'All'}
              </Text>
            </View>
            <Text fontSize={15} color={colors.gray}>
              {item.overview.length > 100
                ? item.overview.substring(0, 100) + ' ...'
                : item.overview}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

MovieCard.propTypes = {
  value: PropTypes.number.isRequired,
  source: PropTypes.object.isRequired,
};
