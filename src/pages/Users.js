import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';
import DataGrid from '../components/DataGrid';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  // State for current page size
  const [pageSize, setPageSize] = useState(10);

  // Function to handle page size change
  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'];

  const data = users.map((user) => ({
    ID: user.id,
    Name: user.name,
    Username: user.username,
    Email: user.email,
    Phone: user.phone,
    Website: user.website,
  }));

  return (
    <div className="w-full">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-4">Users</h1>
    <div className="overflow-x-auto">
      <DataGrid
        columns={columns}
        data={data}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  </div>
  
  );
};

export default Users;
