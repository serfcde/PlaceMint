import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-image"></div>
      <div className="blog-details">
        <div className="blog-title"></div>
        <div className="blog-meta"></div>
        <div className="blog-meta"></div>
        <div className="blog-meta"></div>
      </div>
    </div>
  );
};

export default BlogCard;