import "./App.css";
import Counter from "./components/Hoc/Counter";
import MakeStyles from "./components/MakeStyles";


function App() {
  return (
    <div>
      <MakeStyles />
      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
