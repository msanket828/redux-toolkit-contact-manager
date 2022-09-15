import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ViewContacts from './components/ViewContacts/ViewContacts';
import AddContacts from './components/AddContacts/AddContacts';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' exact element={ <Navigate to="/addcontacts" />}>
          </Route>
          <Route path='/addcontacts' exact element={<AddContacts />}></Route>
          <Route path='/viewcontacts' exact element={<ViewContacts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
