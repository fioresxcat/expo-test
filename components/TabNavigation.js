import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {View, Text, Image, Button} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import FriendsList from './util/FriendsRequestList';
import AppBar from './util/AppBar';
import Landing from './Landing';
import LogOut from './util/LogOut';
import Feed from './Feed';
import { useState, useEffect } from 'react';
import { Animated } from 'react-native';

const Tab = createMaterialTopTabNavigator();


export default function HomePage() {
    const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //   if (scrollY <= 0) {
    //     Animated.timing(fadeAnim, {
    //       toValue: 1,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }).start();
    //   } else {
    //     Animated.timing(fadeAnim, {
    //       toValue: 0,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }).start();
    //   }
    // }, [scrollY]);

    return (
      <View style={{
        flexDirection: 'column',
        flex: 1
      }}> 
          {scrollY <= 0 && <AppBar></AppBar>}
          <Tab.Navigator initialRouteName='Feed' style={{}} tabBarPosition='top'>
              <Tab.Screen name="Feed" options={options.homeScreen}>
                  {props => <Feed setScrollY={setScrollY} />}
              </Tab.Screen>
              <Tab.Screen name="Friend" component={FriendsList} options={options.friendScreen}/>
              <Tab.Screen name="Video" component={Landing} options={options.videoScreen}/>
              <Tab.Screen name="Notification" component={Landing} options={options.notiScreen}/>
              <Tab.Screen name="Menu" component={LogOut} options={options.menuScreen}/>
          </Tab.Navigator>
      </View>
    );
}

const options = {
    homeScreen: {
        tabBarShowLabel:false,
        tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? "#1777f3" : "#66676b"}
              />
            );
          },
    },

    friendScreen: {
        tabBarShowLabel:false,
        tabBarIcon: (tabInfo) => {
            return (
                // <FontAwesome5 name="user-friends" size={24} color={tabInfo.focused ? "#1777f3" : "#8e8e93"} />
                <FontAwesome5 name="users" size={24} color="#8e8e93" />
            );
          },
    },

    videoScreen: {
        tabBarShowLabel:false,
        tabBarIcon: (tabInfo) => {
            return (
                <Octicons name="video" size={24} color={tabInfo.focused ? "#1777f3" : "#8e8e93"} />
            );
          },
    },

    notiScreen: {
        tabBarShowLabel:false,
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons name="md-notifications-sharp" size={24} color={tabInfo.focused ? "#1777f3" : "#8e8e93"} />
            );
          },
    },

    menuScreen: {
        tabBarShowLabel:false,
        tabBarIcon: (tabInfo) => {
            return (
                <MaterialIcons name="menu" size={24} color={tabInfo.focused ? "#1777f3" : "#8e8e93"} />
            );
          },
    }
}