import {Button, Text, View} from 'react-native';
import {Props} from './dashboard.d';

export default function ({navigation, route}: Props) {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title='snack' onPress={()=>{}}/>
    </View>
  );
}
