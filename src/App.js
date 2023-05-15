import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Users</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
