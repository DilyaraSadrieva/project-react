import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchUsers } from '../redux/actions';


const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id}>
          <img src={user.picture} alt={user.name} />
          <p>{user.name}</p>
          <p>{user.login}</p>
          <p>{user.location}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;