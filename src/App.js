import './App.css';
import FruitContainer from './Components/FruitContainer';
import fruits from './Lists/fruit';

function App() {
    return (
        <div className="App">
            <FruitContainer fruits={fruits} />
        </div>
    );
}

export default App;
