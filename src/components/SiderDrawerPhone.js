import React, { Component } from "react";
import { Layout, Menu, Dropdown, Avatar, Drawer } from "antd";

import { Link } from "react-scroll";
import { HomeOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export default class SiderDrawerPhone extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, placement: "right" };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <span>
        <MenuUnfoldOutlined
          onClick={this.showDrawer}
          className="trigger-phone"
        />
        <Drawer
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          key={this.state.placement}
        >
          <div className="sider-menu">
            <Menu theme="light" mode="inline">
              <Menu.Item key="1">
                <Link
                  onClick={this.onClose}
                  className="sider-links "
                  activeclassname="active"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link
                  onClick={this.onClose}
                  className="sider-links "
                  to="about"
                  spy={true}
                  smooth={true}
                >
                  About us
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link
                  onClick={this.onClose}
                  className="sider-links "
                  to="services"
                  spy={true}
                  smooth={true}
                >
                  Services
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link
                  onClick={this.onClose}
                  className="sider-links "
                  to="blog"
                  spy={true}
                  smooth={true}
                >
                  Blog
                </Link>
              </Menu.Item>
              <ul>
                <li className="ms-4 mt-3">
                  <a href="mailto:consult@virtucloud.io">Contact Us</a>
                </li>
              </ul>
            </Menu>
          </div>
        </Drawer>
      </span>
    );
  }
}
