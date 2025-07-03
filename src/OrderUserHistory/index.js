import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { getAllOrders, getAllProducts, getClients, getOrders, getOrdersByUserID } from '../API'

export default class OrderUserHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }
  componentDidMount(){
    getOrdersByUserID(this, this.props.match.params.id)
  }

  filterOrers(status){
    getOrdersByUserID(this, this.props.match.params.id)
  }

  render() {
    return (
      <>
      <header className="app-header fixed-top">
        <div className="app-header-inner">
          <div className="container-fluid py-2">
            <div className="app-header-content">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <a
                    id="sidepanel-toggler"
                    className="sidepanel-toggler d-inline-block d-xl-none"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      role="img"
                    >
                      <title>Menu</title>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                        d="M4 7h22M4 15h22M4 23h22"
                      />
                    </svg>
                  </a>
                </div>
                {/*//col*/}
                <div className="search-mobile-trigger d-sm-none col">
                  <i className="search-mobile-trigger-icon fa-solid fa-magnifying-glass" />
                </div>
                {/*//col*/}
                <div className="app-search-box col">
                  <form className="app-search-form">
                    <input
                      type="text"
                      placeholder="Search..."
                      name="search"
                      className="form-control search-input"
                    />
                    <button
                      type="submit"
                      className="btn search-btn btn-primary"
                      value="Search"
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </form>
                </div>
                {/*//app-search-box*/}
                <div className="app-utilities col-auto">
                  <div className="app-utility-item app-notifications-dropdown dropdown">
                    <a
                      className="dropdown-toggle no-toggle-arrow"
                      id="notifications-dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                      title="Notifications"
                    
                    >
                      {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-bell icon"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                        <path
                          fillRule="evenodd"
                          d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                        />
                      </svg>
                      <span className="icon-badge">3</span>
                    </a>
                    {/*//dropdown-toggle*/}
                    <div
                      className="dropdown-menu p-0"
                      aria-labelledby="notifications-dropdown-toggle"
                    >
                      <div className="dropdown-menu-header p-3">
                        <h5 className="dropdown-menu-title mb-0">Notifications</h5>
                      </div>
                      {/*//dropdown-menu-title*/}
                      <div className="dropdown-menu-content">
                        <div className="item p-3">
                          <div className="row gx-2 justify-content-between align-items-center">
                            <div className="col-auto">
                              <img
                                className="profile-image"
                                src="assets/images/profiles/profile-1.png"
                                alt=""
                              />
                            </div>
                            {/*//col*/}
                            <div className="col">
                              <div className="info">
                                <div className="desc">
                                  Amy shared a file with you. Lorem ipsum dolor sit
                                  amet, consectetur adipiscing elit.{" "}
                                </div>
                                <div className="meta"> 2 hrs ago</div>
                              </div>
                            </div>
                            {/*//col*/}
                          </div>
                          {/*//row*/}
                          <a className="link-mask" href="notifications.html" />
                        </div>
                        {/*//item*/}
                        <div className="item p-3">
                          <div className="row gx-2 justify-content-between align-items-center">
                            <div className="col-auto">
                              <div className="app-icon-holder">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-receipt"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                                  />
                                </svg>
                              </div>
                            </div>
                            {/*//col*/}
                            <div className="col">
                              <div className="info">
                                <div className="desc">
                                  You have a new invoice. Proin venenatis interdum
                                  est.
                                </div>
                                <div className="meta"> 1 day ago</div>
                              </div>
                            </div>
                            {/*//col*/}
                          </div>
                          {/*//row*/}
                          <a className="link-mask" href="notifications.html" />
                        </div>
                        {/*//item*/}
                        <div className="item p-3">
                          <div className="row gx-2 justify-content-between align-items-center">
                            <div className="col-auto">
                              <div className="app-icon-holder icon-holder-mono">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-bar-chart-line"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                                  />
                                </svg>
                              </div>
                            </div>
                            {/*//col*/}
                            <div className="col">
                              <div className="info">
                                <div className="desc">
                                  Your report is ready. Proin venenatis interdum
                                  est.
                                </div>
                                <div className="meta"> 3 days ago</div>
                              </div>
                            </div>
                            {/*//col*/}
                          </div>
                          {/*//row*/}
                          <a className="link-mask" href="notifications.html" />
                        </div>
                        {/*//item*/}
                        <div className="item p-3">
                          <div className="row gx-2 justify-content-between align-items-center">
                            <div className="col-auto">
                              <img
                                className="profile-image"
                                src="assets/images/profiles/profile-2.png"
                                alt=""
                              />
                            </div>
                            {/*//col*/}
                            <div className="col">
                              <div className="info">
                                <div className="desc">
                                  James sent you a new message.
                                </div>
                                <div className="meta"> 7 days ago</div>
                              </div>
                            </div>
                            {/*//col*/}
                          </div>
                          {/*//row*/}
                          <a className="link-mask" href="notifications.html" />
                        </div>
                        {/*//item*/}
                      </div>
                      {/*//dropdown-menu-content*/}
                      <div className="dropdown-menu-footer p-2 text-center">
                        <a href="notifications.html">View all</a>
                      </div>
                    </div>
                    {/*//dropdown-menu*/}
                  </div>
                  {/*//app-utility-item*/}
                  <div className="app-utility-item">
                    <a href="settings.html" title="Settings">
                      {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-gear icon"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                        />
                      </svg>
                    </a>
                  </div>
                  {/*//app-utility-item*/}
                  <div className="app-utility-item app-user-dropdown dropdown">
                    <a
                      className="dropdown-toggle"
                      id="user-dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      <img src="assets/images/user.png" alt="user profile" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="user-dropdown-toggle"
                    >
                      <li>
                        <a className="dropdown-item" href="account.html">
                          Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="settings.html">
                          Settings
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="login.html">
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*//app-user-dropdown*/}
                </div>
                {/*//app-utilities*/}
              </div>
              {/*//row*/}
            </div>
            {/*//app-header-content*/}
          </div>
          {/*//container-fluid*/}
        </div>
        {/*//app-header-inner*/}
        <div id="app-sidepanel" className="app-sidepanel">
          <div id="sidepanel-drop" className="sidepanel-drop" />
          <div className="sidepanel-inner d-flex flex-column">
            <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">
              ×
            </a>
            <div className="app-branding">
              <a className="app-logo" href="index.html">
                <span className="logo-text">OSMA Admin</span>
              </a>
            </div>
            {/*//app-branding*/}
            <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
              <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                <li className="nav-item">
                  {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                  <NavLink to="/orders" className="nav-link">
                    <span className="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-card-list"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                        />
                        <circle cx="3.5" cy="5.5" r=".5" />
                        <circle cx="3.5" cy={8} r=".5" />
                        <circle cx="3.5" cy="10.5" r=".5" />
                      </svg>
                    </span>
                    <span className="nav-link-text">Заказы</span>
                  </NavLink>
                  {/*//nav-link*/}
                </li>
                <li className="nav-item">
                  {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                  <NavLink to="/all_orders" className="nav-link" >
                    <span className="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-card-list"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                        />
                        <circle cx="3.5" cy="5.5" r=".5" />
                        <circle cx="3.5" cy={8} r=".5" />
                        <circle cx="3.5" cy="10.5" r=".5" />
                      </svg>
                    </span>
                    <span className="nav-link-text">История заказов</span>
                  </NavLink>
                  {/*//nav-link*/}
                </li> <li className="nav-item">
                  {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                  <NavLink to="/products" className="nav-link">
                    <span className="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-card-list"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                        />
                        <circle cx="3.5" cy="5.5" r=".5" />
                        <circle cx="3.5" cy={8} r=".5" />
                        <circle cx="3.5" cy="10.5" r=".5" />
                      </svg>
                    </span>
                    <span className="nav-link-text">Товары </span>
                  </NavLink>
                  {/*//nav-link*/}
                </li>
                <li className="nav-item">
                  {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                  <NavLink to="/clients" className="nav-link">
                    <span className="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-card-list"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                        />
                        <circle cx="3.5" cy="5.5" r=".5" />
                        <circle cx="3.5" cy={8} r=".5" />
                        <circle cx="3.5" cy="10.5" r=".5" />
                      </svg>
                    </span>
                    <span className="nav-link-text">Клиенты </span>
                  </NavLink>
                  {/*//nav-link*/}
                </li>
                {/*//nav-item*/}
              </ul>
              {/*//app-menu*/}
            </nav>
            {/*//app-nav*/}
          </div>
          {/*//sidepanel-inner*/}
        </div>
        {/*//app-sidepanel*/}
      </header>
      {/*//app-header*/}
      <div className="app-wrapper" style={{marginTop: '50px'}}>
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <div className="row g-3 mb-4 align-items-center justify-content-between">
              <div className="col-auto">
                <h1 className="app-page-title mb-0">История заказа клиента {this.props.match.params.name}</h1>
              </div>
              <div className="col-auto">
                <div className="page-utilities">
                  <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                    <div className="col-auto">
                      <form className="table-search-form row gx-1 align-items-center">
                        <div className="col-auto">
                          <input
                            type="text"
                            id="search-orders"
                            name="searchorders"
                            className="form-control search-orders"
                            placeholder="Поиск"
                          />
                        </div>
                        <div className="col-auto">
                          <button type="submit" className="btn app-btn-secondary">
                            Поиск
                          </button>
                        </div>
                      </form>
                    </div>
                    {/*//col*/}
                    <div className="col-auto">
                      <select className="form-select w-auto">
                        <option selected="" value="option-1">
                          Все заказы
                        </option>
                        <option value="option-2">This week</option>
                        <option value="option-3">This month</option>
                        <option value="option-4">Last 3 months</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <a className="btn app-btn-secondary" href="#">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-download me-1"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                          />
                        </svg>
                        Download CSV
                      </a>
                    </div>
                  </div>
                  {/*//row*/}
                </div>
                {/*//table-utilities*/}
              </div>
              {/*//col-auto*/}
            </div>
            {/*//row*/}
            {/* <nav
              id="orders-table-tab"
              className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
            >
              <a
                className="flex-sm-fill text-sm-center nav-link active"
                id="orders-all-tab"
                data-bs-toggle="tab"
                href="#orders-all"
                role="tab"
                aria-controls="orders-all"
                aria-selected="true"
                onClick={() => this.filterOrers(1)}
              >
                Необработанные заказы
              </a>
              <a
                className="flex-sm-fill text-sm-center nav-link"
                  href="#orders-all"
                data-bs-toggle="tab"
               
                role="tab"
           aria-controls="orders-all"
                aria-selected="false"
                onClick={() => this.filterOrers(2)}
              >
                Обработанные заказы
              </a>
              <a
                className="flex-sm-fill text-sm-center nav-link"
                id="orders-paid-tab"
                data-bs-toggle="tab"
               href="#orders-all"
                role="tab"
                aria-controls="orders-paid"
                aria-selected="false"
                onClick={() => this.filterOrers(3)}
              >
                В пути
              </a>
              <a
                className="flex-sm-fill text-sm-center nav-link"
                id="orders-pending-tab"
                data-bs-toggle="tab"
                  href="#orders-all"
                role="tab"
                aria-controls="orders-pending"
                aria-selected="false"
                onClick={() => this.filterOrers(4)}
              >
                Отмененные заказы
              </a>
              <a
                className="flex-sm-fill text-sm-center nav-link"
                id="orders-cancelled-tab"
                data-bs-toggle="tab"
             href="#orders-all"
                role="tab"
                aria-controls="orders-cancelled"
                aria-selected="false"
                onClick={() => this.filterOrers(5)}
              >
                Выполненные заказы
              </a>
            </nav> */}
            <div className="tab-content" id="orders-table-tab-content">
              <div
                className="tab-pane fade show active"
                id="orders-all"
                role="tabpanel"
                aria-labelledby="orders-all-tab"
              >
                <div className="app-card app-card-orders-table shadow-sm mb-5">
                  <div className="app-card-body">
                    <div className="table-responsive">
                      <table className="table app-table-hover mb-0 text-left">
                        <thead>
                          <tr>
                            <th className="cell">id</th>
             
                            <th className="cell">Name </th>
                            <th className="cell">Surname</th>
                            <th className="cell">Adress</th>
                            <th className="cell">all_sum</th>
                            <th className="cell">delivery_sum</th>
                            <th className="cell">promocode_sum</th>
                            <th className="cell">status</th>
                            <th className="cell" />
                          </tr>
                        </thead>
                        <tbody>
                         {this.state.orders.map((item) => (
                           <tr>
                           <td className="cell">#{item.id}</td>
                           
                           <td className="cell">{item.name}</td>
                           <td className="cell">
                             <span>{item.surname}</span>
                             {/* <span className="note">2:16 PM</span> */}
                           </td>
                           <td className="cell">
                          {item.address}
                           </td>
                           <td className="cell">{item.all_sum}</td>
                           <td className="cell">{item.delivery_sum}</td>
                           <td className="cell">{item.promocode_sum}</td>
                           <td className="cell">                             <span className={item.status == 1 ? "badge bg-warning" : item.status == 4 ? "badge bg-danger" : item.status == 3 ? "badge bg-info"  : item.status == 2 ? "badge bg-secondary" : "badge bg-success"}>{item.status == 1 ? 'Необработанные заказы' : item.status == 2 ? 'Обработанные заказы' : item.status == 3 ? 'В пути' : item.status == 4 ? 'Отмененные заказы' : item.status == 5 ? 'Выполненные заказы' : null }</span></td>
                           <td className="cell">
                           <NavLink to={'/order_product/' + item.id  + '/' + item.status + '/' + JSON.stringify(item) + '/'} className="btn-sm app-btn-secondary">
                               View
                             </NavLink>
                           </td>
                         </tr>
                         ))}
                       
                        </tbody>
                      </table>
                    </div>
                    {/*//table-responsive*/}
                  </div>
                  {/*//app-card-body*/}
                </div>
                {/*//app-card*/}
                {/* <nav className="app-pagination">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav> */}
                {/*//app-pagination*/}
              </div>
              {/*//tab-pane*/}
            
            </div>
            {/*//tab-content*/}
          </div>
          {/*//container-fluid*/}
        </div>
        {/*//app-content*/}
      </div>
      {/*//app-wrapper*/}
      {/* Javascript */}
    </>
    
    
    )
  }
}
