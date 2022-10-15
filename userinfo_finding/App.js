import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileUI from './UIs/profileUI';
import RepoUI from './UIs/repoUI';
import FollowerUI from './UIs/followerUI';
import FollowingUI from './UIs/followingUI';





const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      
      <Tab.Navigator >
        <Tab.Screen name="Profile" component={ProfileUI}/>
        <Tab.Screen name="Repo" component={RepoUI} />
        <Tab.Screen name="Follower" component={FollowerUI} />
        <Tab.Screen name="Following" component={FollowingUI} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



