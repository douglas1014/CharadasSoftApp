import React from 'react';

import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
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
        this.setState({ timer: timer - 1 });
    }

    render() {
        setTimeout(() => {
            this.setState({ timePassed: true })
        }, 5000);
        console.log('timer: ', this.state.timer);
        return (
            <View style={styles.container}>
                {!this.state.timePassed ? <Text style={styles.text}>Coloque o dispositivo na testa</Text> : toString(this.state.timer)}
                
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
    textBox: {
    },
    text: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    }
})

export default GamePage;
