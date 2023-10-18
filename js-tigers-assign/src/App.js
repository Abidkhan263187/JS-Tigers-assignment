import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Form } from './component/pages/Form';
import { AllRoutes } from './component/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
