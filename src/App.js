import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './userList';
import UserCreate from './userCreate';
import EditUser from './editUser';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
