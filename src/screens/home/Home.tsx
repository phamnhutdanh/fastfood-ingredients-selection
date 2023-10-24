import {View} from 'react-native';
import ItemFoodSquare from '../../components/items/ItemFoodSquare';

export default function Home(): JSX.Element {
  return (
    <View style={{gap: 20}}>
      <ItemFoodSquare />
    </View>
  );
}
