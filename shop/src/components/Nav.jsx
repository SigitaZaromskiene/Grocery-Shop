import logo from "../UI/Img/logo.png"


function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-container_left">
        <img src={logo} alt='Shop logo leaf'/>
        <p className="nav-container_left-title">Nature<span>Fresh</span></p>
      </div>
      <div className="nav-container-light"></div>
    </nav>
  );
}
export default Nav;
