import {ActivityIndicator, StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import {Image} from '@rneui/themed';

const imageUri =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

type ThisProps = {
  imageWidth?: number;
  imageHeight?: number;
  imageUri: string;
};

export default function ItemImageFood(props: ThisProps): JSX.Element {
  return (
    <Image
      source={{uri: props.imageUri ? props.imageUri : imageUri}}
      containerStyle={[
        styles.image_item,
        {width: props.imageWidth, height: props.imageHeight},
      ]}
      PlaceholderContent={<ActivityIndicator />}></Image>
  );
}

const styles = StyleSheet.create({
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  rating_container: {
    flexDirection: 'row',
    gap: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderBottomLeftRadius: 20,
  },
});
