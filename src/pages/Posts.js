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
    <div className="w-full">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-4">Posts</h1>
  <div className="overflow-x-auto">
    <div className="w-full">
      <DataGrid columns={columns} data={data} />
    </div>
  </div>
</div>

  );
};

export default Posts;
