import React from "react";

const Sidebar = props => {
  const { color, text } = props;
  return (
    <div id="sidebar">
      <ul>
        <li class="active"><a href="index.html"><i class="icon icon-home"></i> <span>Dashboard</span></a> </li>
        <li class="submenu"> <a href="#"><i class="icon icon-th-list"></i> <span>Forms</span> <span class="label label-important">3</span></a>
          <ul>
            <li><a href="form-common.html">Basic Form</a></li>
            <li><a href="form-validation.html">Form with Validation</a></li>
            <li><a href="form-wizard.html">Form with Wizard</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;