/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import MainButton from './components/MainButton/MainButton';

function App(): JSX.Element {
  const [userName, setUserName] = React.useState<string>('');

  const onRegisterUser = () => {
    if (!userName) {
      return Analytics.trackEvent('Registro', {
        status: 'Falhou',
        motivo: 'Nome vazio',
      });
    }

    setUserName('');
    Analytics.trackEvent('Registro', {
      status: 'Sucesso',
    });
  };

  const isDarkMode = useColorScheme() === 'dark';

  const checkPreviousSession = async () => {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      Alert.alert(
        'Desculpas',
        'O aplicativo fechou de forma inesperada, coletamos os dados do error vamos trabalhar para corrigir o mais breve possivel',
      );
    }
  };

  useEffect(() => {
    checkPreviousSession();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.listContent}
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            gap: 10,
          }}>
          <Button title="Crash" onPress={() => Crashes.generateTestCrash()} />
          <TextInput
            placeholder="Digite seu nome"
            value={userName}
            onChangeText={setUserName}
            style={styles.input}
          />
          <MainButton title="Registrar" onPress={onRegisterUser} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
  },
});

export default App;
