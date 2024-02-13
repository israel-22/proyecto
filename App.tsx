import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Inicio } from './src/Inicio';
import { Formulario } from './src/Formulario';
import { Menu } from './src/Menu';
import { Stacknavigator } from './src/navegador/Stacknavigator';
const App =()=>{
  return(
    <NavigationContainer >
 <Stacknavigator/>
    </NavigationContainer>
  
  )
}
export default App;
//style={{flex:1}}