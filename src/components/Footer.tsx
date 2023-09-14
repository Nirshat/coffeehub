import '../../public/scss/footer.scss'

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="footer-info-box">
        <div className='info1'>
          <div className="logobox">
            <img src="./resrcs/cupcoffee2.png" alt="" />
            <h1><span>Coffee</span>Hub</h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque possimus asperiores.
          </p>
        </div>

        <div className='info2'>
          <h3>Contact Us</h3>
          <span>Address: 6996 at Philippines, Asia, Earth</span>
          <span>Phone Number: (123) 456-7899</span>
          <span>Email: coffeehub@gmail.com</span>
        </div>

        <div className='info3'>
          <h3>Viewer Guides</h3>
          <span>Home</span>
          <span>About</span>
          <span>Subscribe</span>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        @apg | All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer