import {ScrollView, StyleSheet, View} from 'react-native';
import AccountAndShopDisplay from './display/AccountAndShopDisplay';
import {ItemSectionText} from '../../components/texts/ItemSectionText';
import {GenericText} from '../../components/texts/generics/GenericText';
import {
  convertDateTo_HM_DMY,
  convertMillisecondsToDate,
} from '../../utils/dateConvert';

type ThisProps = {
  navigation: any;
  data: any;
};

export default function ReportDetailWithData(props: ThisProps): JSX.Element {
  const createAt = convertDateTo_HM_DMY(
    convertMillisecondsToDate(props.data.createdAt),
  );
  const updatedAt = convertDateTo_HM_DMY(
    convertMillisecondsToDate(props.data.updatedAt),
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ItemSectionText>{props.data.title}</ItemSectionText>
        <GenericText>{props.data.message}</GenericText>
      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <GenericText>Created at:</GenericText>
          <GenericText>{createAt}</GenericText>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <GenericText>Update at: </GenericText>
          <GenericText>{updatedAt}</GenericText>
        </View>
      </View>

      <View>
        <ItemSectionText>Report by</ItemSectionText>
        <AccountAndShopDisplay
          account={props.data.reporter}
          navigation={props.navigation}
        />
      </View>

      <View>
        <ItemSectionText>Account was reported</ItemSectionText>
        <AccountAndShopDisplay
          account={props.data.reportAccount.accountReported}
          navigation={props.navigation}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
