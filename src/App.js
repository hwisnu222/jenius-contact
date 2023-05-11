import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import AddContact from "./pages/AddContact";
import Contact from "./pages/Contact";
import EditContact from "./pages/EditContact";
import Home from "./pages/Home";
import store from "./redux/store";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
  {
    path: "/contacts/add",
    element: <AddContact />,
  },
  {
    path: "/contacts/edit/:id",
    element: <EditContact />,
  },
]);

const client = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
        />
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
