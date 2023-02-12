import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';


import Landing from './components/Landing';
import Report from './components/Report';
import DiscardChanges from './components/DiscardChanges';
import FinishReport from './components/FinishReport';
import CommentPage from './components/CommentPage';
import HomePage from './components/TabNavigation';
import SinglePostPage from './components/SinglePostPage';
import BlankScreen from './components/BlankScreen';
import ListPost from './components/util/ListPost';
import mySaga from './redux/saga';
import { EditPostPage } from './components/EditPostPage';
import { SlideUpTransition } from './constant';

const Stack = createNativeStackNavigator();
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

export default function App() {
  return (
      <Provider store={store}>
        
          <View style={{ height: statusBarHeight }}></View>

          <NavigationContainer> 
            <Stack.Navigator initialRouteName="HomePage" screenOptions={screenOptions}> 
              <Stack.Group>
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Report" component={Report} />
                <Stack.Screen name='FinishReport' component={FinishReport} />
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='SinglePostView' component={SinglePostPage} />
                <Stack.Screen name='BlankScreen' component={BlankScreen} />
                <Stack.Screen name='ListPostPage' component={ListPost} />
                <Stack.Screen name='CommentPage' component={CommentPage} />
                <Stack.Screen name='EditPostPage' component={EditPostPage} />
              </Stack.Group>

              <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name='DiscardChanges' component={DiscardChanges} />
              </Stack.Group>
              
            </Stack.Navigator>
          </NavigationContainer>
        
      </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const screenOptions = {
  headerShown: false
}