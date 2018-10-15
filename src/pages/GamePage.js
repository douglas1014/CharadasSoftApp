import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import Game from '../components/Game';
import Orientation from 'react-native-orientation';

class GamePage extends React.Component {
  constructor() {
    super();
    this.state = {
      timePassed: false,
      timer: 3
    }
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  decrement() {
    var interval = setInterval(() => {
      this.setState({ timer: this.state.timer-1 })
      clearInterval(interval);
    }, 1000);
    return <Text style={styles.text}>{this.state.timer}</Text>
  };

  render() {
    setTimeout(() => {
      this.setState({ timePassed: true })
    }, 3000);
    return (
      <View style={styles.container}>
        {this.state.timePassed ? (this.state.timer > 0  ? this.decrement() : <Game />)
                                 : <Text style={styles.text}>Coloque o dispositivo na testa</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F07E26',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center'
  }
})

export default GamePage;
