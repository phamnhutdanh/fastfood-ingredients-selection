import {Text} from '@rneui/themed';
import {View} from 'react-native';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function FoodDetailsScreen(props: ThisProps): JSX.Element {
  const {id, foodName} = props.route.params;
  return (
    <View>
      <Text>
        FoodDetailsScreen {id} - {foodName}
      </Text>
    </View>
  );
}
