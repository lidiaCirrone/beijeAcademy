import React, { FunctionComponent } from 'react';

// modules
import { Text, Image, View } from 'react-native';
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
            <Text style={styleCarousel.heading}>Homepage overview</Text>
            <Image
               source={require('../../assets/tutorial/01.jpg')}
               resizeMode='center'
               style={styleCarousel.pageImage}
            />
            <Text style={styleCarousel.caption}>Press "Edit" to start adding people to your contacts list</Text>
         </View>

         <View style={styleCarousel.page} key="2">
            <Text style={styleCarousel.heading}>Adding contacts</Text>
            <View style={styleCarousel.spaceBetween}>
               <Image
                  source={require('../../assets/tutorial/02.jpg')}
                  resizeMode='center'
                  style={[styleCarousel.multiplepageImages, styleCarousel.marginRight]}
               /><Image
                  source={require('../../assets/tutorial/02b.jpg')}
                  resizeMode='center'
                  style={styleCarousel.multiplepageImages}
               />
            </View>
            <Text style={styleCarousel.caption}>Tap on a person's picture (or grey circle) to add them to your contacts list. You'll see the counter at the top of the page increasing. If you want to reset your selection, press "Reset". Once you're finished, hit "Save".</Text>
         </View>

         <View style={styleCarousel.page} key="3">
            <Text style={styleCarousel.heading}>Asking for help</Text>
            <View style={styleCarousel.spaceBetween}>
               <Image
                  source={require('../../assets/tutorial/03.jpg')}
                  resizeMode='center'
                  style={[styleCarousel.multiplepageImages, styleCarousel.marginRight]}
               /><Image
                  source={require('../../assets/tutorial/03b.jpg')}
                  resizeMode='center'
                  style={styleCarousel.multiplepageImages}
               />
            </View>
            <Text style={styleCarousel.caption}>Once you're done with choosing your emergency contacts, you're good to go. Press "Ask for help!" and you'll automatically be redirected to your messaging app with a text containing your address and location on a map ready to be sent.</Text>
         </View>

      </PagerView>
   )
}

export default Carousel;