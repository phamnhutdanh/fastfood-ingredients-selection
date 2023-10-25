import colors from '../../styles/colors';
import {OnPressItem} from '../../types/GenericType';
import AddAndSubtractGenericButton from './generics/AddAndSubtractGenericButton';

type ThisProps = {
  onPressItem: OnPressItem;
};

export default function FavoriteButton(props: ThisProps): JSX.Element {
  return (
    <AddAndSubtractGenericButton
      onPress={props.onPressItem}
      name={'heart'}
      iconType="antdesign"
      iconSize={24}
      iconColor={colors.heartColor}
      buttonStyle={{backgroundColor: 'transparent'}}
    />
  );
}
