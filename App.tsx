import { SafeAreaView } from 'react-native';
import { Inicio } from './src/Inicio';
import { Formulario } from './src/Formulario';
import { Menu } from './src/Menu';
const App =()=>{
  return(
    <SafeAreaView style={{flex:1}}>
  {/* <Inicio/>  */}
   {/* <Formulario/>   */}
  <Menu/> 
    </SafeAreaView>
  
  )
}
export default App;