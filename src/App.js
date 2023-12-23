import { useContext } from 'react';
import './App.css';
import { userContext } from './context/authContext/authContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
  const { user } = useContext(userContext)
  console.log(user);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
