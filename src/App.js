import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <div>
<nav className="bg-gray-500">
  <div className="flex justify-center items-center">
    <ul className="flex flex-wrap justify-center space-x-9 text-white text-lg">
      <li className="hover:text-sky-300">
        <Link to="/" className="nav-link">Users</Link>
      </li>
      <li className="hover:text-sky-300">
        <Link to="/posts" className="nav-link">Posts</Link>
      </li>
      <li className="hover:text-sky-300">
        <Link to="/comments" className="nav-link">Comments</Link>
      </li>
    </ul>
  </div>
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
