import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import {GenericText} from '../../../components/texts/generics/GenericText';
import HistoryOrder from './history/HistoryOrder';
import MyCartTab from './my_cart/MyCartTab';

type ThisProps = {
  navigation: any;
};

export function MainTabCartScreen(props: ThisProps): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)}>
        <Tab.Item title="My cart" />
        <Tab.Item title="On going" />
        <Tab.Item title="History" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <MyCartTab navigation={props.navigation} />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <GenericText>On going</GenericText>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <HistoryOrder navigation={props.navigation} />
        </TabView.Item>
      </TabView>
    </>
  );
}
