import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Paths } from './paths';
import { Catalog } from './pages/Catalog';
import { Main } from './pages/Main';

import './App.css';

const router = createBrowserRouter([
  {
    path: Paths.main,
    element: <Main />,
  },
  {
    path: Paths.products,
    element: <Catalog />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
