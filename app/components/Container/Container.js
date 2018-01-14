import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyle = [
    styles.container,
    backgroundColor ? { backgroundColor } : null,
  ];

  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default Container;
