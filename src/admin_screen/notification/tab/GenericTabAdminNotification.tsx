import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {useFocusEffect} from '@react-navigation/native';
import {NotiStatus} from '../../../types/constants';
import EmptyAccountTab from '../../../admin_screen/accounts/generic/EmptyAccountTab';
import {GET_ADMIN_NOTIFICATION} from '../../../screens/notification/NotifyQuery';
import NotificationList from '../../../screens/notification/display/NotificationList';

type ThisProps = {
  navigation: any;
  status: NotiStatus;
  tabIndex: number;
};

export default function GenericTabAdminNotification(
  props: ThisProps,
): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ADMIN_NOTIFICATION, {
    variables: {
      status: props.status,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  useEffect(() => {
    refetch();
  }, [props.tabIndex]);

  return (
    <>
      {data === null || data?.getAllNotificationOfAdmin?.length <= 0 ? (
        <EmptyAccountTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <NotificationList
              data={
                data?.getAllNotificationOfAdmin
                  ? data?.getAllNotificationOfAdmin
                  : null
              }
              navigation={props.navigation}
              title={'All notifications'}
              refetch={refetch}
            />
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
