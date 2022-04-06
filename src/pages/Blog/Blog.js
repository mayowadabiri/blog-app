import { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';
import BlogItem from '../../components/BlogItem/Blogitem';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4002/api/v1/blog/get/blogs')
      .then((res) => setBlogs(res.data.blogs));
  }, []);
  console.log(blogs);

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog_lists">
        {blogs.map((item) => (
          <BlogItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
