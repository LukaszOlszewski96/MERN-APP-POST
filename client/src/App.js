import './App.css';
import Form from './components/Forms/Form';
import Navbar from './components/Navigations/Navbar';
import Post from './components/Posts/Post';

function App() {

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <div className="horizontal-box">
        <div className="left">
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className="right">
          <Form/> 
        </div>
      </div>
    </div>
  );
}

export default App;
