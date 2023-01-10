import RoutesApp from "./Routes/routes";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      
      <Header/>
      
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;
