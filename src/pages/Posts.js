import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions';
import DataGrid from '../components/DataGrid';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const columns = ['ID', 'Title', 'Body'];

  const data = posts.map((post) => ({
    ID: post.id,
    Title: post.title,
    Body: post.body,
  }));

  return (
    <div>
      <h1>Posts</h1>
      <DataGrid columns={columns} data={data} />
    </div>
  );
};

export default Posts;
