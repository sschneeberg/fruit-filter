import './App.css';
import FruitContainer from './Components/FruitContainer';

const fruits = ['Apple', 'Kiwi', 'Banana', 'Pineapple'];

function App() {
    return (
        <div className="App">
            <FruitContainer fruits={fruits} />
        </div>
    );
}

export default App;
