import { RouterProvider } from 'react-router-dom';
import './App.css';
import  router  from './Routes/Routes/Routes';

function App() {
  return (
    <div className='container mx-auto'>
      <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;
