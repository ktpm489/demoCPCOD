
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { width, height } from 'react-native-dimension'
import ImageSequence from 'react-native-image-sequence'
import Carousel from 'react-native-snap-carousel';
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
        <Image source={item} style={{ width : width(100), height : height(18)}} resizeMode={'cover'}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/background4.jpg')}
          style={styles.imgBackground}
        >
      <View style={{ height : height(20) }}>
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
            // inactiveSlideShift={20}
            containerCustomStyle={styles.slider}
            contentContainerStyle={styles.container}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={true}
            loopClonesPerSide={1}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            />

      </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <DefaultTabBar />}>
          <View tabLabel='COUPONS'>
          <Text>{'COUPONS'}</Text>
          </View>
          <View tabLabel='STORES'>
            <Text>{'STORES'}</Text>
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
    paddingTop : height(1),
    overflow: 'visible', // for custom animations
    
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  }
});

export default HelloWorld