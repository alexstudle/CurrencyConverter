import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = (props) => {
  const { checkmark, visible, background } = props;
  const styleIcon = [styles.icon];

  if (visible) {
    styleIcon.push(styles.iconVisible);
  }

  if (background) {
    styleIcon.push({ backgroundColor: background });
  }

  return (
    <View style={styleIcon}>
      {checkmark
        ? <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={require('./images/check.png')}
        />
        : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  background: PropTypes.string,
};

export default Icon;
