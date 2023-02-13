import { Easing } from "react-native-reanimated";

export const mytoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTIwYmZkYTEyZTgwM2FmYWEwMTczMyIsImRhdGVMb2dpbiI6IjIwMjMtMDItMDlUMTU6MDQ6MDAuMjE1WiIsImlhdCI6MTY3NTk1NTA0MCwiZXhwIjoxNzA3NDkxMDQwfQ.I32OxVAPqcgLdJuzvB6oKh9Ppa4w1adS_wNJeAVQZl8'
export const host = 'http://192.168.88.215:5000/it4788'
export const myID = '63e20bfda12e803afaa01733'

export const SlideUpTransition = {
    gestureDirection: 'vertical',
    transitionSpec: {
      open: {
        animation: 'timing',
        config: {
          duration: 500,
          easing: Easing.ease,
        },
      },
      close: {
        animation: 'timing',
        config: {
          duration: 500,
          easing: Easing.ease,
        },
      },
    },
    cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };


export const variables = {
    backGround: '#FFFFFF',
    blue: '#1877F2',
    lightBlue: '#D0EBF7',
    black: '#000000',
    gray: '#5B5B5B',
    lightGray: '#B6B6B6',
    green: '#42b72a'
}