
import theme from './src/Toggle/theme';
import Main from './src/AppNavigator/Main';
import { useColorScheme } from 'react-native';
import themeContext from './src/Toggle/themeContext';
import { useEffect, useState, useMemo } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, NavigationContainer, DefaultTheme } from '@react-navigation/native';


const App = () => {

  const [darkmode, setDarkMode] = useState(null)

  useEffect(() => {
    const retrieveTheme = async () => {
      const themesave = await AsyncStorage.getItem('THEME');
      setDarkMode(JSON.parse(themesave));
    };
    retrieveTheme();

    const EListen = EventRegister.addEventListener('changeTheme', (data) => {
      setDarkMode(data);
    });

    return () => {
      EventRegister.removeAllListeners(EListen);
    };
  }, [darkmode]);


  const colorScheme = useColorScheme();

  const themehere = useMemo(() => {
    if (darkmode === null) {
      return colorScheme === 'dark' ? theme.dark : theme.light;
    } else {
      return darkmode === true ? theme.dark : theme.light;
    }
  }, [darkmode, colorScheme]);


  return (

    <themeContext.Provider value={themehere}>
      <NavigationContainer theme={darkmode === true ? DarkTheme : DefaultTheme}>
        <Main />
      </NavigationContainer>
    </themeContext.Provider>
  )
}

export default App
