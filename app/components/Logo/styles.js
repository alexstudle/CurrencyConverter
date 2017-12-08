import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    position: 'absolute',
    width: imageWidth / 2,
    marginTop: imageWidth / 10,
  },
  title: {
    fontSize: 28,
    color: '$white',
    fontWeight: '700',
    marginTop: 15,
    letterSpacing: -0.5,
  },
});
