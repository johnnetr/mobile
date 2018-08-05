import React from 'react';
import { View, Text, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Playing from '../Playing';
import Popular from '../Popular';
import Search from '../Search';


const NowPlayingList = createStackNavigator({
    NowPlaying: {
        screen: Playing
    },
}, {
    navigationOptions: {
        headerTitle: (
            <Text style={{ color: 'red', fontSize: 26 }}>NETFLEX</Text>
        ),
      }
});

const PopularList = createStackNavigator({
    Playing: {
        screen: Popular 
    },
}, {
    navigationOptions: {
        headerTitle: (
            <Text style={{ color: 'red', fontSize: 26 }}>NETFLEX</Text>
        ),
        
      }
});

const Tabs = createBottomTabNavigator({
    NowPlaying: {
        screen: NowPlayingList,
    },
    Popular: {
        screen: PopularList,
    },
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'NowPlaying') {
          iconName = `ios-apps${focused ? '' : '-outline'}`;
        } else if (routeName === 'Popular') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
            iconName = `ios-search${focused ? '' : '-outline'}`;
          }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  }
 );

 const Root = createSwitchNavigator({
     Home: Tabs,
     Search: Search
 })

export default Root;