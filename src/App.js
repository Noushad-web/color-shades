
import './App.scss';
import ColorShades from './component/ColorShades';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cursor from './component/Cursor';

function App() {
  return (
    <div className="App"> 
      <Cursor/>
      <ColorShades/>
    </div>
  );
}

export default App;
