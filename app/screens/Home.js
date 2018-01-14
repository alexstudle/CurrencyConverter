import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { ConnectAlert } from '../components/Alert';

import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion,
} from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
    alertWithType: PropTypes.func,
    currencyError: PropTypes.string,
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError !== this.props.currencyError
    ) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  handleBasePress = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };
  handleQuotePress = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
  };
  handleTextChange = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };
  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };
  handleOptionsPress = () => {
    this.props.navigation.navigate('Options', { title: 'Options' });
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2,);
    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <Logo tintColor={this.props.primaryColor} />
        <InputWithButton
          buttonText={this.props.baseCurrency}
          onPress={this.handleBasePress}
          defaultValue={this.props.amount.toString()}
          keyboardType="numeric"
          onChangeText={amount => this.handleTextChange(Number(amount))}
          buttonTextColor={this.props.primaryColor}
        />
        <InputWithButton
          editable={false}
          buttonText={this.props.quoteCurrency}
          onPress={this.handleQuotePress}
          value={quotePrice}
          buttonTextColor={this.props.primaryColor}
        />
        <LastConverted
          base={this.props.baseCurrency}
          quote={this.props.quoteCurrency}
          conversionRate={this.props.conversionRate}
          date={this.props.lastConvertedDate}
        />
        <ClearButton
          text="Reverse currencies"
          onPress={this.handleSwapCurrency}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency, amount } = state.currencies;
  const { primaryColor } = state.theme;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    primaryColor,
    currencyError: state.currencies.error,
  };
};

export default connect(mapStateToProps)(ConnectAlert(Home));
