import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CategoriesPage from './pages/CategoriesPage';
import GamePage from './pages/GamePage';


export default createStackNavigator({
    'Main': {
        screen: CategoriesPage,
        headerLayoutPreset: 'center',
        navigationOptions: {
            headerRight: <Icon name='information' color='white' style={{paddingRight: 15, fontSize: 20}} /* onPress={ () => { goBack() } } */ />,
            title: 'Charadas',
            headerStyle: {
                backgroundColor: '#F07E26',
            },
            headerTitleStyle: {
                paddingLeft: 120,
                color: '#FFFFFF',
            },
        },

        /*
         navigationOptions: {
          title: 'Characters',
          headerStyle: {
              backgroundColor: '#B50F16',
          },
          headerTitleStyle: {
              fontFamily: "BarlowCondensed-Bold",
              fontSize: 20,
              color: '#FFFFFF',
          }
      } */
    },
    'GamePage': {
        screen: GamePage,
        navigationOptions: {
            headerTransparent: true,
        }
    }
});