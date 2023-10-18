import copyright from "../images/copyright.png";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div
      class="navbar  navbar-dark bg-dark"
      // style={{position:'fixed',bottom:0,left:0,right:0}}
    >
      <ul style={{ listStyle: "none", marginBottom: 54 }}>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            {" "}
            <img src={copyright} style={{ height: 20 }} /> 2023 Company Software
            Inc.
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            <img src={logo} style={{ height: 20 }} /> Company
          </a>
        </li>
      </ul>
      <ul style={{ listStyle: "none" }} class="ml-auto">
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }}>
            Features
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Analytics
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Cookie SOlution
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Blogs
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            User Management
          </a>
        </li>
      </ul>
      <ul style={{ listStyle: "none" }}>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }}>
            Company
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Community
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Blog
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            FAQ
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Contact
          </a>
        </li>
      </ul>
      <ul style={{ listStyle: "none", marginBottom: 54 }}>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }}>
            Legal
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Privacy Policy
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Terms of Use
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style={{ color: "white" }} href="#">
            Security Policy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
