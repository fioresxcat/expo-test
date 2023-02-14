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

import RemoveAccount from './components/Long/Pages/SignIn/components/RemoveAccount';
import SignInLoading from './components/Long/Pages/SignIn/components/SignInLoading';
import SaveAccount from './components/Long/Pages/SignIn/components/SaveAccount';
import CreateAccount from './components/Long/Pages/SignUp/components/CreateAccount';
import SetName from './components/Long/Pages/SignUp/components/SetName';
import SetBirth from './components/Long/Pages/SignUp/components/SetBirth';
import SetPhone from './components/Long/Pages/SignUp/components/SetPhone';
import SetPassword from './components/Long/Pages/SignUp/components/SetPassword';
import TermsPrivacy from './components/Long/Pages/SignUp/components/TermsPrivacy';
import Status from './components/Long/Pages/SignUp/components/Status';
import Service from './components/Long/Pages/SignUp/components/Service';
import Data from './components/Long/Pages/SignUp/components/Data';
import Cookie from './components/Long/Pages/SignUp/components/Cookie';
import ConfirmCode from './components/Long/Pages/SignUp/components/ConfirmCode';
import NoteAccount from './components/Long/Pages/SignUp/components/NoteAccount';
import SaveInfo from './components/Long/Pages/SignUp/components/SaveInfo';
import EnterPassWord from './components/Long/Pages/SignIn/components/EnterPassword';
import AddAvatar from './components/Long/Pages/SignUp/components/AddAvatar';
import { AddPostPage } from './components/AddPostPage';


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
            <Stack.Navigator initialRouteName="RemoveAccount" screenOptions={screenOptions}> 
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
                <Stack.Screen name='RemoveAccount' component={RemoveAccount} />
                <Stack.Screen name='SignInLoading' component={SignInLoading} />
                <Stack.Screen name='SaveAccount' component={SaveAccount} />
                <Stack.Screen name='CreateAccount' component={CreateAccount} />
                <Stack.Screen name='SetName' component={SetName} />
                <Stack.Screen name='SetBirth' component={SetBirth} />
                <Stack.Screen name='SetPhone' component={SetPhone} />
                <Stack.Screen name='SetPassword' component={SetPassword} />
                <Stack.Screen name='TermsPrivacy' component={TermsPrivacy} />
                <Stack.Screen name='Status' component={Status} />
                <Stack.Screen name='Service' component={Service} />
                <Stack.Screen name='Data' component={Data} />
                <Stack.Screen name='Cookie' component={Cookie} />
                <Stack.Screen name='ConfirmCode' component={ConfirmCode} />
                <Stack.Screen name='NoteAccount' component={NoteAccount} />
                <Stack.Screen name='SaveInfo' component={SaveInfo} />
                <Stack.Screen name='EnterPassWord' component={EnterPassWord} />
                <Stack.Screen name='AddAvatar' component={AddAvatar} />
                <Stack.Screen name='AddPostPage' component={AddPostPage} />
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