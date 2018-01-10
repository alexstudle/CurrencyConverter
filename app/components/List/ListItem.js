import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

import Icon from './Icon';

const ListItem = (props) => {
  const {
    text,
    onPress,
    selected = false,
    checkmark = true,
    visible = true,
    customIcon = null,
    iconBackground = null,
  } = props;

  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected
          ? <Icon
            checkmark={checkmark}
            visible={visible}
            background={iconBackground}
          />
          : <Icon />}
        {customIcon}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.any,
  iconBackground: PropTypes.string,
};

export default ListItem;
