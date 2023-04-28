import React from "react";
import Fade from "react-reveal/Fade";

export default function Footer({ Color }) {
  return (
    <div className="flex justify-center">
      <div className="container ">
        <h1
          className="text-center  font-medium text-4xl  mt-[100px]"
          style={{ color: Color.primary }}
        >
          Contact
        </h1>
        <footer className="footer-distributed mt-[60px]">
          <div className="footer-left">
            <h3>
              RAJA QASIM <span>ALI</span>
            </h3>

            <p className="footer-links">
              <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
              <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Company Name © 2015</p>

            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="footer-right">
            <p>Contact Us</p>

            <form action="#" method="post">
              <Fade bottom>
                <input type="text" name="name" placeholder="Name" />
              </Fade>
              <Fade bottom>
                <input type="text" name="email" placeholder="Email" />
              </Fade>
              <Fade bottom>
                <textarea name="message" placeholder="Message"></textarea>
              </Fade>
              <Fade bottom>
                <button>Send</button>
              </Fade>
            </form>
          </div>
        </footer>
      </div>
    </div>
  );
}
