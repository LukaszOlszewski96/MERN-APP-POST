import './App.css';
import Form from './components/Forms/Form';
import Navbar from './components/Navigations/Navbar';

function App() {

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <div className="horizontal-box">
        <div className="left">lewa</div>
        <div className="right">
          <Form/> 
        </div>
      </div>
    </div>
  );
}

export default App;
