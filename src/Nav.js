import React from "react";

const Nav = props => {
  const { background, text } = props;
  return (
    <div id="user-nav" class="navbar navbar-inverse">
        <ul class="nav">
            <li class=""><a title="" href="login.html"><i class="icon icon-share-alt"></i> <span class="text">Logout</span></a></li>
        </ul>
    </div>
  );
};

export default Nav;