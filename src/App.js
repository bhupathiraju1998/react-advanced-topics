import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import HeroComponent from "./components/ErrorBoundary/HeroComponent";
import Counter from "./components/Hoc/Counter";
import MakeStyles from "./components/MakeStyles";

function App() {
  return (
    <div>
      <MakeStyles />
      <hr />
      <Counter />
      <hr />
      <h3 style={{textAlign:"center"}}>Error Boundary</h3>

      <ErrorBoundary>
        <HeroComponent name="Hero " />
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroComponent name="villan" />
      </ErrorBoundary>
      <hr/>
    </div>
  );
}

export default App;
