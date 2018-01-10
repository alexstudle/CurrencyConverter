import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $largeImageMargin: imageWidth / 10,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $smallImageMargin: imageWidth,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  image: {
    position: 'absolute',
    width: '$largeImageSize',
    marginTop: '$largeImageMargin',
  },
  title: {
    fontSize: 28,
    color: '$white',
    fontWeight: '700',
    marginTop: 15,
    letterSpacing: -0.5,
  },
});
