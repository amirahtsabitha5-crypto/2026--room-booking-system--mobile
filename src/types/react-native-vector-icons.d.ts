declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { Component } from 'react';
  interface IconProps {
    name: string;
    size: number;
    color?: string;
    style?: any;
  }
  export default class Icon extends Component<IconProps> {}
  export function getImageSource(
    name: string,
    size: number,
    color?: string
  ): Promise<{ uri: string; size: number }>;
}
