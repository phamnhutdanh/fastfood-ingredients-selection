import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import HomeHeaderDisplay from './display/HomeHeaderDisplay';
import colors from '../../styles/colors';
import VerticalListFood from '../../components/displays/VerticalListFood';
import {useQuery} from '@apollo/client';
import React, {Suspense} from 'react';
import {GET_ALL_PRODUCT} from './HomeQuery';
import PopularProducts from './display/PopularProducts';
import RecentProducts from './display/RecentProducts';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function HomeScreen(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_ALL_PRODUCT);

  if (!loading) {
    return (
      <VerticalListFood
        data={data.getAllProducts}
        navigation={props.navigation}
        contentContainerStyle={styles.mainContainer}
        listHeaderComponent={
          <View style={styles.headingContainer}>
            <HomeHeaderDisplay navigation={props.navigation} />

            <RecentProducts navigation={props.navigation} route={props.route} />

            <PopularProducts
              navigation={props.navigation}
              route={props.route}
            />

            {/* <View>
   
              <SectionText>Favorite</SectionText>
              <HorizontalListFood
                data={popularFastFoodList}
                navigation={props.navigation}
              />
            </View>

            <View>
            
              <SectionText>Order Again</SectionText>
              <HorizontalListFood
                data={popularFastFoodList}
                navigation={props.navigation}
              />
            </View> */}
            <SectionText>Discovery</SectionText>
          </View>
        }
      />
    );
  } else return <ActivityIndicator size={'large'} />;
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 12,
    paddingBottom: 32,
    paddingHorizontal: 20,
  },
  headingContainer: {
    gap: 12,
  },
  oval: {
    alignSelf: 'center',
    width: '60%',
    position: 'absolute',
    height: 200,
    backgroundColor: colors.third,
    borderRadius: 50,
    transform: [{scaleX: 2}],
  },
});
