import React from "react";
import PostItem from './PostItem';

const PostList = props => {
  const { children } = props;
  return (
    <ul class="recent-posts">
        {children}
    </ul>
  );
};

export default PostList;