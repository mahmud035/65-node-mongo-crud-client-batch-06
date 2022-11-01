import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import Home from './Components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
