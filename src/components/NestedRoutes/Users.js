import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../auth";
const Users = () => {
    const [searchParams , setsearchParams] = useSearchParams();
    const auth = useAuth()
    const navigate = useNavigate()
    const showActiveUsers = searchParams.get('filter')  === 'active'
    //we use .get method to get the filters and in response of the condition it retuns boolean
   
    const handleLogout = () => {
      auth.logout()
      navigate('/login')
    }
  
  
    return (
    <>
    <h2>Welcome User {auth.user}</h2>
    <button onClick={()=>handleLogout()}>Logout</button>
      <button onClick={()=>setsearchParams({filter:'active'})}>Active Users Filter</button>
      {/* <button onClick={()=>setsearchParams({filter:'deactive'})}>Dective Users</button> */}

      <button onClick={()=>setsearchParams({})}>Reset Filter</button>
      {showActiveUsers ? <h2>Showing active users</h2> : <h2>showing all users</h2>}
    </>
  );
};

export default Users;
