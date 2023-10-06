import { Home, Landing } from "./pages";
import "./global.css"
import { ToastContextProvider } from "./context/ToastContext";
import { ToastContainer } from "react-toastify";
import { Nav } from "./components";

function App() {
  return (
    <ToastContextProvider>
      <Nav />
      <div>
        <ToastContainer />
        <Home />
      </div>
    </ToastContextProvider>
  );
}

export default App;
