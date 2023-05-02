import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import SocialIcons from "./SocialIcons/SocialIcons";
export default function Footer({ Color }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fti9ox3",
        "template_ol6l95m",
        form.current,
        "-5g49dTZ9h54QCl5a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center" id="#Contact">
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

            <p className="footer-links ">Front End Developer</p>
            <div className="mt-10  -ml-4">
              <SocialIcons Color={Color} top="68px" />
            </div>
          </div>

          <div className="footer-right">
            <p>Contact Us</p>

            <form action="#" method="post" ref={form} onSubmit={sendEmail}>
              <Fade bottom>
                <input type="text" name="user_name" placeholder="Name" />
              </Fade>
              <Fade bottom>
                <input type="text" name="user_email" placeholder="Email" />
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
