
import Layout from './Components/Layout/Layout';
import { createHashRouter ,RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import './App.css';


let routers=createHashRouter([{
  path:'/' ,element:<Layout/> ,children:[
    {index:true ,element:<Home/>},
    {path:'portfolio' ,element:<Portfolio/>},
    {path:'about' ,element:<About/>},
    {path:'contact' ,element:<Contact/>},
    {path:'*' ,element:<NotFound/>}
   

  ]
  
}])

function App() {
  return (<RouterProvider router={routers}/>
    
  );
}

export default App;