import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {GET_ACCOUNT_BY_ID} from '../../../accounts/AccountListQuery';
import {useQuery} from '@apollo/client';
import AvatarUserInfoDisplay from '../../display/AvatarUserInfoDisplay';
import AvatarShopInfoDisplay from '../../display/AvatarShopInfoDisplay';
import {SectionText} from '../../../../components/texts/SectionText';
import {Button} from '@rneui/themed';
import DeleteAllCartDialog from '../../../../screens/cart/display/DeleteAllCartDialog';
import BanButtonDialog from '../../display/BanButtonDialog';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AccountInfoTab(props: ThisProps): JSX.Element {
  const accountId = props.route.params.accountId;

  const {data, loading, refetch} = useQuery(GET_ACCOUNT_BY_ID, {
    variables: {
      id: accountId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) {
    return <ActivityIndicator size={'small'} />;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <SectionText>User info</SectionText>
        <AvatarUserInfoDisplay
          data={data?.getAccountById?.user}
          email={data?.getAccountById?.email}
        />
      </View>

      {data?.getAccountById?.user?.shop !== null && (
        <View>
          <SectionText>Owner this shop</SectionText>
          <AvatarShopInfoDisplay data={data?.getAccountById?.user?.shop} />
        </View>
      )}

      <BanButtonDialog />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 24,
  },
  info: {},
});
