import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  };

  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };

  render() {
    const { type } = this.props.navigation.state.params;
    let currency = this.props.baseCurrency;

    if (type === 'quote') {
      currency = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <View>
              <ListItem
                text={item}
                selected={item === currency}
                onPress={() => this.handlePress(item)}
                iconBackground={this.props.primaryColor}
              />
            </View>
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const { primaryColor } = state.theme;

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);
