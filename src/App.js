import "./App.css";
import './styles/fonts.css'
import AllRoutes from "./Pages/AllRoutes";
import './styles/responsive.css'
import img from './Images/logo.svg'
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/svg" href={img} />
      </Helmet>
      <AllRoutes/>
    </div>
  );
}

export default App;
