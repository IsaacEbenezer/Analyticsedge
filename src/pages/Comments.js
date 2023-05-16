import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../redux/actions';
import DataGrid from '../components/DataGrid';

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const columns = ['ID', 'Name', 'Email', 'Body'];

  const data = comments.map((comment) => ({
    ID: comment.id,
    Name: comment.name,
    Email: comment.email,
    Body: comment.body,
  }));

  return (
    <div className="w-full">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-4">Comments</h1>
    <div className="overflow-x-auto">
      <div className="w-full">
        <DataGrid columns={columns} data={data} />
      </div>
    </div>
  </div>
  
  );
};

export default Comments;
