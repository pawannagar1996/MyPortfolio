import { BsSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import { ImMobile } from "react-icons/im";

import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { useRef, useState } from "react";
import "./contact.css";

function Contact(props) {
  const form = useRef();
  const fName = useRef();
  const eMail = useRef();
  const mobile = useRef();
  const subject = useRef();
  const message = useRef();
  const buttonRef = useRef();
  let [disabled, setDisabled] = useState(true);

  function buttonDisabled(e) {
    if (e.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    // console.log(e.target.value)
  }
  // console.log(disabled)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k56teah", "template_ne0fzz8", form.current, {
        publicKey: "piDBPtKjgoXsxBAml",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast("Send Message Successfully!");
          setDisabled(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("Some Went Wrong , please Form Fill Again");
        }
      );
    clearFormInput();
  };

  function clearFormInput() {
    fName.current.value = "";
    eMail.current.value = "";
    mobile.current.value = "";
    subject.current.value = "";
    message.current.value = "";
  }

  return (
    <>
      <div className="wrapper">
        <div className="contact layout pTB100">
          <div className="main-title">
            <h1>
              get in <span>touch</span>
            </h1>
            <span className="main-title-title-bg">contact</span>
          </div>

          <div className="leftRight">
            <div className="left">
              <form
                action=""
                method="post"
                id="form1"
                ref={form}
                onSubmit={sendEmail}
              >
                <div>
                  <input
                    type="text"
                    id="fName"
                    name="fName"
                    ref={fName}
                    placeholder="full name"
                    onChange={(e) => buttonDisabled(e)}
                    required
                  />
                  <input
                    type="email"
                    id="e-mail"
                    name="e-mail"
                    ref={eMail}
                    placeholder="e-mail"
                   
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    ref={mobile}
                    placeholder="mobile number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    ref={subject}
                    placeholder="subject"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    ref={message}
                    placeholder="your message"
                  ></textarea>
                </div>
                <div>
                  <div className="projectBtn">
                    <button
                      type="submit"
                      onClick={sendEmail}
                      ref={buttonRef}
                      disabled={disabled}
                      className="magnatic"
                      onMouseEnter={() => {
                        props.one();
                      }}
                      onMouseOut={() => {
                        props.two();
                      }}
                    >
                      <span>send message</span>
                      <span>
                        <BsSendFill />
                      </span>
                    </button>
                    <Toaster
                      position="top-center"
                      reverseOrder={false}
                      gutter={8}
                      containerClassName=""
                      containerStyle={{}}
                      toastOptions={{
                        // Define default options
                        className: "",
                        duration: 5000,
                        style: {
                          background: "#363636",
                          color: "#fff",
                          fontSize: "1.6rem",
                          textAlign: "center",
                          width: "auto",
                        },
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="right">
              <div className="right-content">
                <h3>DON'T BE SHY !</h3>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects.
                </p>
              </div>

              <div className="right-content right-content-icon">
                <div>
                  <div className="head">Mail Me</div>
                  <div>
                    <p className="para">
                      <a href="mailto:pawannagar1996@gmail.com">pawannagar1996@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <IoIosMailOpen />
                </div>
              </div>

              <div className="right-content right-content-icon">
                <div>
                  <div className="head">call me</div>
                  <div>
                    <p className="para">
                      <a href="tel:+917053560066">+91 705 356 0066</a>
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <ImMobile />
                </div>
              </div>

              <div className="right-content social-icons">
                <span>
                  <a href="https://www.instagram.com/dashing_nagar/" target="_blank">
                    <RiInstagramFill />
                  </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/profile.php?id=100022982831289" target="_blank">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/pawan-nagar-296847214/" target="_blank">
                    <FaLinkedin />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/pawannagar1996" target="_blank">
                    <FaGithub />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
