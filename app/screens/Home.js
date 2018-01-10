import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79,74';
const TEMP_CONVERSION_RATE = 0.7974;

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleBasePress = () => {
    this.props.navigation.navigate('CurrencyList');
  };
  handleQuotePress = () => {
    this.props.navigation.navigate('CurrencyList');
  };
  handleTextChange = (text) => {};
  handleReverseButtonClick = () => {};
  handleOptionsPress = () => {};

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handleBasePress}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          editable={false}
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handleQuotePress}
          value={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton
          text="Reverse currencies"
          onPress={this.handleReverseButtonClick}
        />
      </Container>
    );
  }
}

export default Home;
