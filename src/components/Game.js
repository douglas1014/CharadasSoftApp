import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import charadas from '../../charadas.json';

var random;
// charadas[0].words[Math.floor(Math.random() * charadas[0].words.length)]
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 10,
    };
  }

  /* randomWord() {
    var random = charadas[0].words[Math.floor(Math.random()*charadas[0].words.length)];
    return random;
  } */

  decrement() {
    var interval = setInterval(() => {
      random = charadas[0].words[Math.floor(Math.random()*charadas[0].words.length)];
      clearInterval(interval);
      return <Text style={styles.text}>{random}</Text>
    }, 5000);
  };

  render() {
    return (
      <View>
          <Text style={styles.word}>{this.decrement()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  word: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center'
  },
  timer: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

export default Game;







/* componentWillUnmount() {
    clearInterval(this.state.interval); // Always clean up before unmounting
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  decrement() {
    var interval = setInterval(() => {
      this.setState({ timer: this.state.timer-1 })
    }, 1000);
    this.setState({ interval: interval });
    return <Text style={styles.word}>{this.state.timer}</Text>
  };

  timeOut() {
    return <Text style={styles.timer}>O tempo acabou!</Text>
  }

  render() {
    var random = charadas[0].words[Math.floor(Math.random()*charadas[0].words.length)];
    return (
      <View>
        <Text style={styles.word}>Teste</Text>
      </View>
    );
  } */