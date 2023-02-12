import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import BackgroundButton from './BackgroundButton'


const addOrRemove = (array, item) => {
    const exists = array.includes(item)

    if (exists) {
        return array.filter((c) => { return c !== item })
    } else {
        const result = array
        result.push(item)
        return result
    }
}


export default class TagsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: props.selected
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.makeButtons()}
            </View>
        )
    }

    onPress = (tag) => {
        let selected
        if (this.props.isSelectable) {
            if (this.props.isExclusive) {
                selected = [tag]
            } else {
                selected = addOrRemove(this.state.selected, tag)
            } 
            this.setState({
                selected
            })
            this.props.setSelectedTag(selected)
        }
        
        console.log(this.state.selected)
    }

    makeButtons() {
        return this.props.all.map((tag, i) => {
            const on = this.state.selected.includes(tag)
            const backgroundColor = on ? '#1877f2' : 'rgb(230, 230, 230)'
            const textColor = on ? 'white' : 'black'
            const borderColor = on ? 'green' : 'red'

            return (
                <BackgroundButton
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    borderColor={borderColor}
                    onPress={() => {
                        this.onPress(tag)
                    }}
                    key={i}
                    showImage={on}
                    title={tag} />
            )
        })
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingBottom: 5
    }
})