import {Button, Text, View} from 'react-native';
import {Props} from './dashboard.d';
import Snackbar from 'react-native-snackbar';

export default function ({navigation, route}: Props) {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="snack"
        onPress={() => {
          Snackbar.show({
            text: 'Hello world',
            duration: Snackbar.LENGTH_SHORT,
          });
        }}
      />
    </View>
  );
}
