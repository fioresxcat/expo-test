import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
// import R from 'res/R'

export default class BackgroundButton extends React.Component {
  render() {
    const styles = this.makeStyles()
    return (
      <TouchableOpacity style={styles.touchable} onPress={this.props.onPress}>
        <View style={{...styles.view}}>
          {this.makeImageIfAny(styles)}
          <Text style={{...styles.text, fontWeight: "500"}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  makeImageIfAny(styles) {
    // if (this.props.showImage) {
    //   return <Image style={styles.image} source={R.images.check} />
    // }
  }
  
  makeStyles() {
    return StyleSheet.create({
      view: {
        flexDirection: 'row',
        borderRadius: 23,
        borderWidth: 0,
        backgroundColor: this.props.backgroundColor,
        height: 35,
        // width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
      },
      touchable: {
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 8
      },
      image: {
        marginRight: 8
      },
      text: {
        fontSize: 15,
        textAlign: 'center',
        color: this.props.textColor,
      }
    })
  }
}