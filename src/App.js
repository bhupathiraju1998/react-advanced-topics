import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import HeroComponent from "./components/ErrorBoundary/HeroComponent";
import Counter from "./components/Hoc/Counter";
import MakeStyles from "./components/MakeStyles";
import ClassParentRefs from "./components/Refs/ClassParentRefs";
import FunctionalRef from "./components/Refs/FunctionalRef";

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

      {/* uncomment Below ErrorBoundary to see how error boundary works */}
      {/* <ErrorBoundary>
        <HeroComponent name="villan" />
      </ErrorBoundary> */}
      <hr/>

      <FunctionalRef/>
      <ClassParentRefs/>

      <hr/>
    </div>
  );
}

export default App;
