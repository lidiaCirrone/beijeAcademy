import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create(
   {
      viewPager: {
         flex: 1,
         width: Dimensions.get('window').width - 40
      },
      page: {
         alignItems: 'center'
      },
      heading: {
         fontWeight: 'bold',
         fontSize: 16,
         marginBottom: 15
      },
      pageImage: {
         height: Dimensions.get('window').height / 2,
         marginTop: 0
      },
      multiplepageImages: {
         width: '48%',
         height: Dimensions.get('window').height / 2
      },
      spaceBetween: {
         flexDirection: 'row'
      },
      marginRight: {
         marginRight: 15
      },
      caption: {
         textAlign: 'center',
         marginTop: 15
      }
   }
)