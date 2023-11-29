import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {Icon} from '@rneui/themed';
import {ItemScoreText} from './ItemScoreText';
import {ComponentStyle} from '../../types/GenericType';

type ThisProps = {
  ratingScore: number;
  textStyle?: ComponentStyle;
};

export default function RatingText(props: ThisProps): JSX.Element {
  return (
    <View style={styles.rating_container}>
      <Icon size={12} color={colors.yellowStar} type="antdesign" name="star" />
      <ItemScoreText style={[styles.text, props.textStyle]}>
        {props.ratingScore}
      </ItemScoreText>
    </View>
  );
}

const styles = StyleSheet.create({
  rating_container: {
    flexDirection: 'row',
    gap: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.darkBlack,
    fontSize: 12,
    marginTop: 4,
  },
});
