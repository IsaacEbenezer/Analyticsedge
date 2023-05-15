import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';
import DataGrid from '../components/DataGrid';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = ['ID', 'Name', 'Email'];

  const data = users.map((user) => ({
    ID: user.id,
    Name: user.name,
    Email: user.email,
  }));

  return (
    <div>
      <h1>Users</h1>
      <DataGrid columns={columns} data={data} />
    </div>
  );
};

export default Users;
