import {StyleProp, ViewStyle} from 'react-native';

export type OnPressItem = (item: any) => void;

export type ItemComponent =
  | React.ReactNode
  | React.ComponentType<any>
  | React.ReactElement
  | null
  | undefined;

export type ActionType = () => void;

export type ComponentStyle = StyleProp<ViewStyle> | any | undefined;
