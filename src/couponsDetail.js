//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image, FlatList, TouchableOpacity } from 'react-native';
import { width, height} from 'react-native-dimension'
import coupons from '../config/coupons'
// create a component

class MyClass extends Component {

    pressItem = (link) =>{
        console.log('Item link', link)
        this.props.navigation.push('WebView', { link: link })
    }

    renderItem = ({item}) =>{
        return (
            <TouchableOpacity style={styles.containerItem} onPress={() => this.pressItem(item.url)}>
                <Image source={item.link} style={styles.img} resizeMode='contain' />
                <Text style={styles.text} numberOfLines={2}>{item.name}</Text>
            </TouchableOpacity>
        )

    }

    render() {
       const { itemData } = this.props.navigation.state.params 
       console.log('itemData', itemData )
        return (
            <FlatList
                data={itemData.data}
                contentInsetAdjustmentBehavior={'automatic'}
                contentContainerStyle={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginVertical : height(1) }}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    containerItem : {
        borderColor: 'gray',
        alignItems: 'center',
        padding : width(1),
        width : width(90),
        marginVertical: height(1),
       // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 1,
        position: 'relative',
    },
     text: {
         color: 'gray',
        alignContent: 'center',
        fontSize:  width(4.5),
        paddingLeft: width(4),
        alignSelf: 'center',
        justifyContent :'center',
    },
    img : {
        width: width(20), height: width(20), backgroundColor: 'white',
        marginLeft:  width(1),
        alignSelf: 'center',
    }
});

//make this component available to the app
export default MyClass;
