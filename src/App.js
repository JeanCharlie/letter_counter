
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-8 mx-auto'>
            <Counter />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
