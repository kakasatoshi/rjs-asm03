import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import MyNavBar from "./components/Layout/MyNavBar";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./components/DetailPage/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: authLoader,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/:id",
        element: <DetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
