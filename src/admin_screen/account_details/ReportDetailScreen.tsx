import {useQuery} from '@apollo/client';
import {GET_REPORT_DETAILS} from '../accounts/AccountListQuery';
import {useFocusEffect} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import ReportDetailWithData from './ReportDetailWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReportDetailScreen(props: ThisProps): JSX.Element {
  const reportDetailId = props.route.params.reportDetailId!;

  const {data, loading, refetch} = useQuery(GET_REPORT_DETAILS, {
    variables: {
      id: reportDetailId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) return <ActivityIndicator size={'small'} />;

  return (
    <ReportDetailWithData
      navigation={props.navigation}
      data={data ? data.getReportDetails : null}
    />
  );
}
