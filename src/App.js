import { Center, Spacer } from '@chakra-ui/react';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Routes/Navbar';

function App() {
  return (
    <> 
     <Navbar/>
    
     <Center>

     <AllRoutes/>   
     </Center>
    </>
  );
}

export default App;
