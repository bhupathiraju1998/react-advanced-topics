import React from "react";
import {  Route, Routes} from "react-router-dom";
import App from "./App";
import About from "./components/NestedRoutes/About";
import Navbar from "./components/NestedRoutes/Navbar";
import OrderSummary from "./components/NestedRoutes/OrderSummary";
import NotFound from "./components/NestedRoutes/NotFound";
import Products from "./components/NestedRoutes/Products";
import NewProducts from "./components/NestedRoutes/NewProducts";
import FeaturedProducts from "./components/NestedRoutes/FeaturedProducts";
import Users from "./components/NestedRoutes/Users";
import Profile from "./components/NestedRoutes/Profile";
import { AuthProvider } from "./auth";
import Login from "./components/NestedRoutes/Login";
import RequireAuth from "./components/NestedRoutes/RequireAuth";
//import LazyLoading from "./components/LazyLoading/LazyLoading";
const LazyComponentImplemented = React.lazy(()=> import('./components/LazyLoading/LazyLoading') )

function MainIndex (){
    return(
       
       <AuthProvider> 
        <Navbar/>
        <hr/>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path='/order-summary' element={<OrderSummary/>}/>
            <Route exact path='/products' element={<RequireAuth><Products/></RequireAuth>}>
                <Route index element={<FeaturedProducts/>}/>
                <Route path='featured' element={<FeaturedProducts/>}/> 
                <Route path='new' element={<NewProducts/>}/>
            </Route>
            <Route exact path='/users' element={<RequireAuth><Users/></RequireAuth>}/>
            <Route exact path='/profile' element={<RequireAuth><Profile/></RequireAuth>}/>
            <Route exact path='/login' element={<Login/>}/>

      
            <Route 
                exact 
                path="/lazycomponent" 
                element={<React.Suspense fallback='Loading...'><LazyComponentImplemented/></React.Suspense>}
            />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
         </AuthProvider>
         
       
    )

}

export default MainIndex

//1)if we use path = 'about' this is relative path (no '/') we use for nested routes
//2)we use index prop so that even on /products we see  products/featured ui on /products path
//3) const params = useParams()
//   const userId = params.userId   or     const {userId} = useParams()