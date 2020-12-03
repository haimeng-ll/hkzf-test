import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class NotFound extends Component {
  render() {
    return (
      <div>
        你访问的页面不存在，点击到<NavLink to="/home">首页</NavLink>
      </div>
    );
  }
}
