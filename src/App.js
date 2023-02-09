import RoutesApp from "./Routes/routes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <RoutesApp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
