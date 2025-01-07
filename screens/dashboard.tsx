import {Button, Text, View} from 'react-native';
import {Props} from './dashboard.d';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import FirestoreService from '../services/firebase/firebaseStoreService';

export default function ({navigation, route}: Props) {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="sign out"
        onPress={() => {
          Snackbar.show({
            text: 'Signout',
            duration: Snackbar.LENGTH_SHORT,
          });

          auth().signOut();
        }}
      />
      <Button
        title="add data"
        onPress={() => {
          FirestoreService.collection('test').addDocument({title: 'aaa'});
        }}
      />
    </View>
  );
}
