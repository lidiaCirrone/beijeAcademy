import React, { FunctionComponent } from 'react';

// modules
import { Text, Pressable, View } from 'react-native';
import PagerView from 'react-native-pager-view';

// styles
import styleCarousel from './styleCarousel';


const Carousel: FunctionComponent = () => {
   return (
      <PagerView
         style={styleCarousel.viewPager}
         initialPage={0}
      >
         <View style={styleCarousel.page} key="1">
            <Text>First page</Text>
            <Text>Swipe ➡️</Text>
         </View>
         <View style={styleCarousel.page} key="2">
            <Text>Second page</Text>
         </View>
         <View style={styleCarousel.page} key="3">
            <Text>Third page</Text>
         </View>
      </PagerView>
   )
}

export default Carousel;