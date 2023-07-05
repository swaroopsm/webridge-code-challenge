import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RootPage as Root } from 'routes/Root';
import { Fallback } from 'routes/Fallback';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Fallback />,
      },
      {
        path: ':page',
        element: <Fallback />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
