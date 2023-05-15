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
    <div>
      <h1>Comments</h1>
      <DataGrid columns={columns} data={data} />
    </div>
  );
};

export default Comments;
