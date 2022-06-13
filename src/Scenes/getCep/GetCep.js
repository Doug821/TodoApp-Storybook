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

export default GetCep = ({title, navigate, inputValue, setInputValue}) => {
  const onPress = () => console.log('clicked');
  const [address, setAddress] = useState();

  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(`https://viacep.com.br/ws/${debouncedSearchTerm}/json`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(response => {
          setAddress(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [debouncedSearchTerm]);

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
          style={textInput}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Type your CEP"
        />
      </View>
      {address && !address.erro && (
        <View style={cardsContainer}>
          <View style={cardView}>
            <Text style={cardTitle}>{`
          ${address.cep}\n
          ${address.bairro}\n
          ${address.logradouro}\n
          ${address.localidade} - ${address.uf}
        `}</Text>
          </View>
        </View>
      )}
    </View>
  );
};
