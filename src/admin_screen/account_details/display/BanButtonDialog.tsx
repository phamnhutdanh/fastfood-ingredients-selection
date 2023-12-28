import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import fonts from '../../../styles/fonts';

type ThisProps = {};

export default function BanButtonDialog(props: ThisProps): JSX.Element {
  //   const [deleteAllCartProductsOfUser, {data, loading, error}] = useMutation(
  //     DELETE_ALL_CART_OF_USER,
  //   );
  const banAccount = async () => {
    // await deleteAllCartProductsOfUser({
    //   variables: {
    //     userId: props.userId,
    //   },
    // }).then(() => {
    //   props.refetch();
    //   Snackbar.show({text: 'All item deleted success'});
    // });
  };
  return (
    <ConfirmDialog
      onPressOk={banAccount}
      bigTitleText={'WARNING'}
      titleText={'Are you sure ban this account'}
      title={'BAN'}
      buttonStyle={{backgroundColor: colors.red, paddingVertical: 12}}
      titleStyle={{color: colors.white, fontFamily: fonts.POPPINS_BOLD}}
    />
  );
}
