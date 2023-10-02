import { Landing } from "./pages";
import "./global.css"
import { ToastContextProvider } from "./context/ToastContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ToastContextProvider>
      <div>
        <ToastContainer />
        <Landing />
      </div>
    </ToastContextProvider>
  );
}

export default App;
