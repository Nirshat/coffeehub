import "../public/scss/App.scss";
import "../public/scss/firstContent.scss";
import "../public/scss/secondContent.scss";
import "../public/scss/thirdContent.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const qualities = [
    {
      main: "AWESOME AROMA",
      sub: "The coffee is brewed by first roasting the green coffee beans",
    },
    {
      main: "HIGH QUALITY",
      sub: "The coffee is brewed by first roasting the green coffee beans",
    },
    {
      main: "PURE GRADES",
      sub: "The coffee is brewed by first roasting the green coffee beans",
    },
    {
      main: "PROPER ROASTING",
      sub: "The coffee is brewed by first roasting the green coffee beans",
    },
  ];

  return (
    <>
      <div className="app-box">
        <Header />
        <div className="body-box">
          <div className="intro-content-box">
            <div className="msg-box">
              <h1>Good Coffee Will Always Find The Audience </h1>
              <p>We Provide a variety of unique and Best Coffees.</p>
              <button type="button" id="prim-btn">Order Now <i className="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className="illust1">
              <img src="./resrcs/cupcoffee.png" alt="" />
            </div>
          </div>







          <div className="second-content-box">
            <div className="qualities">
              {qualities.map((q, index) => (
                <div key={index}>
                  <span>{q.main}</span>
                  <p>
                    {q.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="about-box">
              <div id="box1">
                <img src="./resrcs/cupcoffee6.jpg" alt="" />
              </div>

              <div id="box2">
                <h1>Best Coffee House In Your Home Town</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium ipsam, aspernatur tempora assumenda nobis rem ut ducimus animi quae ullam quos facilis? Blanditiis illum fuga eius! Amet, qui dolorum.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ullam. Adipisci voluptates, ea, harum dignissimos consectetur nesciunt, natus corrupti...
                </p>

                <button id="prim-btn">Read More <i className="fa-solid fa-arrow-down"></i></button>
              </div>
            </div>
          </div>








          <div className="third-content-box">
            <div id="box1">
              <img src="./resrcs/beans.png" alt="" />
            </div>


            <div id="box2">
              <h1>
                Subscribe To Get Updated
              </h1>

              <div id="input-box">
                <input type="email" placeholder="Enter Your Email" />
                <button id="prim-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
