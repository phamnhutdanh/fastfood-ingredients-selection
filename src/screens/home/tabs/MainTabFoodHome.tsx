import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import {GenericText} from '../../../components/texts/generics/GenericText';
import {View} from 'react-native';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';

type MainTabGameCategoriesProps = {
  navigation: any;
};

type LISTTYPE = {
  id: number;
  title: string;
};

const list = [
  {id: 1, title: 'All'},
  {id: 2, title: 'Just Added'},
];

export function MainTabFoodHome(
  props: MainTabGameCategoriesProps,
): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)} scrollable>
        <GenericFlatList
          data={list}
          renderItem={({item}: {item: any}) => <Tab.Item title={item.title} />}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <GenericText>All</GenericText>
        </TabView.Item>

        <TabView.Item style={{width: '100%'}}>
          <GenericText>Just added</GenericText>
        </TabView.Item>
      </TabView>
    </>
  );
}
