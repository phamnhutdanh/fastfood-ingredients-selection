import {FlatList, FlatListProps, StyleSheet} from 'react-native';
import {useCallback, useState} from 'react';

type ThisProps = FlatListProps<any> & {};

export default function GenericFlatList(props: ThisProps): JSX.Element {
  const [ITEM_HEIGHT] = useState(120);
  const getItemLayout = useCallback(
    (data: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  const memoizedKeyExtractor = useCallback((item: any) => {
    return item.id;
  }, []);

  return (
    <FlatList
      keyExtractor={memoizedKeyExtractor}
      showsVerticalScrollIndicator={
        props.showsVerticalScrollIndicator
          ? props.showsVerticalScrollIndicator
          : false
      }
      contentContainerStyle={[styles.container, props.contentContainerStyle]}
      // numColumns={3}
      // columnWrapperStyle={styles.row}
      // onEndReached={OnLoadNextPage}
      getItemLayout={getItemLayout}
      initialNumToRender={
        props.initialNumToRender ? props.initialNumToRender : 12
      }
      windowSize={props.windowSize ? props.windowSize : 5}
      maxToRenderPerBatch={
        props.maxToRenderPerBatch ? props.maxToRenderPerBatch : 15
      }
      //  updateCellsBatchingPeriod={30}
      //  removeClippedSubviews={false}
      //  onEndReachedThreshold={0.1}
      // ListFooterComponent={FooterComponent}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
