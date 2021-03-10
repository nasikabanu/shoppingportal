import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import TextInput from '../components/textInput'
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Login
          </Text>
          <TextInput/>
          <Button
            onPress={() => navigation.navigate('DashboardScreen')}
            title="Go to Second Page"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;