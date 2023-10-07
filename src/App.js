import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import HeroComponent from "./components/ErrorBoundary/HeroComponent";
import Counter from "./components/Hoc/Counter";
import MakeStyles from "./components/MakeStyles";
import ClassParentRefs from "./components/Refs/ClassParentRefs";
import FunctionalRef from "./components/Refs/FunctionalRef";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
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
            <div className="App">
        <h3>LazyLoading</h3>
        <button onClick={()=>navigate('/lazycomponent')}>Click Me to check Lazy Loading</button>
      </div>
      <hr/>
    </div>
  );
}

export default App;
