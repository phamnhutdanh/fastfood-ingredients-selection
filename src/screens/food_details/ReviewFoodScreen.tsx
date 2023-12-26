import {StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import {GenericText} from '../../components/texts/generics/GenericText';
import colors from '../../styles/colors';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReviewFoodScreen(props: ThisProps): JSX.Element {
  return (
    <View>
      <SectionText style={{fontSize: 16}}>Description</SectionText>
      <GenericText>{props.route.params.userId}</GenericText>
    </View>
  );
}

const styles = StyleSheet.create({
  mainInfoContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    marginTop: -20,
    flex: 1,
  },
  contentContainer: {
    gap: 12,
    paddingVertical: 32,
    paddingHorizontal: 28,
  },
});
