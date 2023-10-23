import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../auth";

const Users = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    setSearchParams(new URLSearchParams(location.search));
  }, [location.search]);

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  const handleActiveFilter = () => {
    const params = new URLSearchParams(location.search);
    params.set('filter', 'active');
    navigate('?' + params.toString());
  };

  const handleDeactiveFilter = () => {
    const params = new URLSearchParams(location.search);
    params.set('addFilter', 'deactive');
    navigate('?' + params.toString());
  };

  const handleResetFilter = () => {
    navigate();
  };

  const showActiveUsers = searchParams.get('filter') === 'active';
  const showDeActiveUsers = searchParams.get('addFilter') === 'deactive';

  return (
    <>
      <h2>Welcome User {auth.user}</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleActiveFilter}>Active Users Filter</button>
      <button onClick={handleDeactiveFilter}>Deactive Users</button>
      <button onClick={handleResetFilter}>Reset Filter</button>
      {showActiveUsers ? <h2>Showing active users</h2> : null}
      {showDeActiveUsers ? <h2>Showing deactive users</h2> : null}
    </>
  );
};

export default Users;
