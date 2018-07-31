
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { width, height } from 'react-native-dimension'
import Carousel from 'react-native-snap-carousel';
import store from './config/store'
const images = [
  require('./images/images1.jpeg'),
  require('./images/images2.jpeg'),
  require('./images/images3.jpeg'),
  require('./images/images4.jpeg'),
  require('./images/images5.jpeg'),
  require('./images/images6.jpeg'),
  require('./images/images7.jpg'),
  require('./images/images8.jpeg'),
  require('./images/images9.jpg'),
  require('./images/images10.jpg')
]
const centerIndex = Math.round(images.length / 2);


class HelloWorld extends Component {

  _renderItem({ item, index }) {
    return (
      <View style={styles.slider}>
        <Image source={item} style={{ width: width(100), height: height(23) }} resizeMode={'cover'} />
      </View>
    );
  }
  componentWillMount() {
    console.log('store', store)
  }

  renderStoreItem = ({ item }) => {
    return (
      <View style={{
        width: width(25), height: width(25), backgroundColor: 'white', margin: height(2), alignItems: 'center', justifyContent: 'center', shadowColor: "black", alignSelf: 'center',
        shadowOffset: { height: height(1) },
        shadowRadius: height(0.5),
        borderRadius: height(1),
        elevation: 5,
        shadowOpacity: 0.5
      }}>
        <Image source={item.linkImage} style={{ width: width(25), height: width(25), alignSelf: 'center', borderRadius: height(1) }} resizeMode='contain' />
      </View>
    )
  }
  // TODO check number image  depend on width
  renderStoreData = () => {
    return (
      <View style={{ marginBottom: height(5) }}>
        <FlatList
          data={store}
          contentInsetAdjustmentBehavior={'automatic'}
          contentContainerStyle={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}
          numColumns={3}
          renderItem={this.renderStoreItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/background8.jpg')}
          style={styles.imgBackground}
        >
          <View style={{ height: height(25) }}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={images}
              renderItem={this._renderItem}
              sliderWidth={width(100)}
              itemWidth={width(100)}
              loop={true}
              autoplay={true}
              autoplayInterval={3000}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              containerCustomStyle={styles.slider}
              contentContainerStyle={styles.container}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={1}
              autoplayDelay={500}
            />

          </View>
          <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <DefaultTabBar />}>
            <View tabLabel='COUPONS'>
              <Text>{'COUPONS'}</Text>
            </View>
            <View tabLabel='STORES'>
              {this.renderStoreData()}
            </View>
          </ScrollableTabView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1
  },
  exampleContainer: {
    paddingVertical: 30
  },
  exampleContainerLight: {
    backgroundColor: 'white'
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'red',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  slider: {
    paddingTop: height(1),
    overflow: 'visible', // for custom animations
    shadowColor: "transparent", alignSelf: 'center',
    shadowOffset: { height: height(1) },
    shadowRadius: height(0.5),
    borderRadius: height(1),
    elevation: 5,
    shadowOpacity: 0.5

  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  containerStoreData: {
    // flex: 1,
    alignItems: 'center',
    // alignContent: 'center',
    //flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
  },
  touchButton: {
    alignSelf: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 25,
    width: 295,
    margin: 15,
  },
  touchButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold'
  },
});

export default HelloWorld