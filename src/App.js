
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
        <RouterProvider router={Routes}>

        </RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
