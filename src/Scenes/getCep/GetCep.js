import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import useDebounce from '../../Hooks/useDebounce';

import {
  cardTitle,
  cardView,
  contentWrapper,
  inputContainer,
  cardsContainer,
  textInput,
} from './styles';

export default GetCep = ({title, navigate, getAddress, address}) => {
  const [cardAdress, setCardAddress] = useState();
  const [inputValue, setInputValue] = useState('');
  const isValidPostalCode = postCode => /^[0-9]{8}$/.test(postCode);
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setCardAddress(address);
  }, [address]);

  useEffect(() => {
    setCardAddress(null);
    isValidPostalCode(debouncedInputValue)
      ? getAddress(debouncedInputValue)
      : console.log('Invalid post-code');
  }, [debouncedInputValue]);

  return (
    <View style={contentWrapper}>
      <View style={cardView}>
        <Button
          title="⬅️"
          variant="check"
          disabled={false}
          onPress={navigate}
          loading={false}
        />
        <Text style={cardTitle}>{title}</Text>
      </View>
      <View style={inputContainer}>
        <TextInput
          keyboardType="numeric"
          maxLength={8}
          style={textInput}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Type your CEP"
        />
      </View>
      {cardAdress && !cardAdress.erro && (
        <View style={cardsContainer}>
          <View style={cardView}>
            <Text style={cardTitle}>{`
              ${cardAdress?.code}\n
              ${cardAdress?.address}\n
              ${cardAdress?.district}\n
              ${cardAdress?.city} - ${cardAdress?.state}
        `}</Text>
          </View>
        </View>
      )}
    </View>
  );
};
