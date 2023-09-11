import logo from "../images/logo.svg";
import user from "../images/user.png";

const Header = () => {
  return (
    <div
      class="navbar
     fixed-top navbar-dark bg-dark
     "
    >
      <a class="navbar-brand" href="#">
        <img src={logo} style={{ height: 30 }} />
      </a>
      {/* <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button> */}
      {/* <div class='navbar-collapse' id='navbarText'> */}
      <ul class="nav">
        <li class="nav-item active">
          <a class="nav-link" href="#" style={{ color: "white" }}>
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ color: "white" }}>
            Features
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ color: "white" }}>
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ color: "white" }}>
            <img src={user} style={{ height: 30 }} />
          </a>
        </li>
      </ul>
      {/* <span class='navbar-text'>Navbar text with an inline element</span> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
