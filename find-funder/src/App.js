import logo from './logo.svg';
import './App.css';
import DemoApp from './Component/DemoApp';
import MovieDemo from './MovieBooking/MovieDemo';
import Form from './Form';
import Chat from './Chat';
// require('dotenv').config()

function App() {
  return (
    <div>
      <DemoApp/>
      {/* <MovieDemo/> */}
          {/* <Form/> */}
          {/* <Chat/> */}
    </div>
  );
}

export default App;
