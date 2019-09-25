import React from 'react';
import { Button,View, Text } from 'react-native';



class More extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>More!</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }

  export default More;