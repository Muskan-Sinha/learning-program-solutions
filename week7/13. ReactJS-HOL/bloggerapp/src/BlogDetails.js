import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div className="section">
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id} style={{ marginBottom: '20px' }}>
          <strong>{blog.title}</strong>
          <p><b>{blog.author}</b></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
