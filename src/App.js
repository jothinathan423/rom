
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// importamos los componentes
import Contact from './components/contact';
import NavBarExample from './layouts/navbar';
import Home from './components/Home';
import About from './components/About';
import EnhancedTable from './components/tables';
import NptelCert from './components/nptel';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExample/>}>
            <Route index element={<Home/>}></Route>
            <Route path='tables' element={<EnhancedTable/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='nptel' element={<NptelCert/>}></Route>
            <Route path='*' element={<Navigate replace to="/"/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
