import React from "react";
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import App from "./App";
//import LazyLoading from "./components/LazyLoading/LazyLoading";
const LazyComponentImplemented = React.lazy(()=> import('./components/LazyLoading/LazyLoading') )

function MainIndex (){
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route 
                exact 
                path="/lazycomponent" 
                element={<React.Suspense fallback='Loading...'><LazyComponentImplemented/></React.Suspense>}
            />
        </Routes>
        </BrowserRouter>
    )

}

export default MainIndex