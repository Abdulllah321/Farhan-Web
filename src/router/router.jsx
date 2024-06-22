
import {createBrowserRouter} from "react-router-dom";
import App from '../App'
import ErrorPage from '../pages/errorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <h1>About Page</h1>,
    },
    {
      path: "/education",
      element: <h1>Education Page</h1>,
    },
    {
      path: "/welfare",
      element: <h1>Welfare Page</h1>,
    },
    {
      path: "/spirituality",
      element: <h1>Spirituality Page</h1>,
    },
    {
      path: "/publication",
      element: <h1>Publication Page</h1>,
    },
  ]);
  
export default router;