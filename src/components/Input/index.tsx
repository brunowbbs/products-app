import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';
import {COLORS} from '../../theme';

import styles from './styles';
import {InputProps} from './types';

const Input = ({placeholder, style, password, ...rest}: InputProps) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  function renderInputPassword() {
    if (visiblePassword) {
      return (
        <View style={[style, styles.container]}>
          <TextInput
            placeholderTextColor={COLORS.grayDark}
            secureTextEntry={false}
            placeholder={placeholder}
            style={styles.input}
            {...rest}
          />

          <TouchableOpacity
            onPress={() => setVisiblePassword(!visiblePassword)}>
            <Icon size={17} name="eye" />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={[style, styles.container]}>
        <TextInput
          placeholderTextColor={COLORS.grayDark}
          secureTextEntry
          placeholder={placeholder}
          style={styles.input}
          {...rest}
        />

        <TouchableOpacity onPress={() => setVisiblePassword(!visiblePassword)}>
          <Icon size={17} name="eye-closed" />
        </TouchableOpacity>
      </View>
    );
  }

  if (password) {
    return renderInputPassword();
  }

  return (
    <View style={[style, styles.container]}>
      <TextInput
        placeholderTextColor={COLORS.grayDark}
        placeholder={placeholder}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

export default Input;
