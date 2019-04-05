import React from "react";

const PostItem = props => {
  const { children } = props;
  
  if(children) {
    <li>
        {children} 
    </li>
  }

  //default Post Item
  return (
    <li>
        <div class="user-thumb"><img width="40" height="40" alt="User" src="img/demo/av1.jpg" /></div>
        <div class="article-post"> <span class="user-info"> By: john Deo / Date: 2 Aug 2012 / Time:09:27 AM </span>
            <p><a href="#">This is a much longer one that will go on for a few lines.It has multiple paragraphs and is full of waffle to pad out the comment.</a> </p>
        </div>  
    </li>
  );
};

export default PostItem;