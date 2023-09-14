
import '../../public/scss/header.scss'

const Header = () => {
  return (
    <div className="header-box">
      <div className="logo-box">
        <img src="./resrcs/cupcoffee2.png" alt="" />
        <div id='name'>
          <span className="logoHL">
            Coffee
          </span>
          Hub
        </div>
      </div>


      <div className="nav-box">
        <nav className="nav-item"> <i className="fa-brands fa-github"></i> </nav>
        <nav className="nav-item"><i className="fa-brands fa-facebook"></i></nav>
      </div>
    </div>
  )
}

export default Header