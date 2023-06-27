import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import EarthCanvas from "../../Components/canvas/Earth";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion.js";
import "./Contact.css";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };


  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_40f698y",
        "template_ij5wc9l",
        {
          from_name: form.name,
          to_name: "Anirudh Vadera",
          from_email: form.email,
          to_email: "anirudhvadera@gmail.com",
          message: form.message,
        },
        "ygbGBVJgJGLlR6oHP"
      )
      .then(
        () => {
          setLoading(false);
          handleClick();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          handleClick2();
        }
      );
  };

  return (
      <div
        className={`ContactMain`}
        id = "Contact"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='ContactForm'
        >
          <p className='AboutH2'>Get in touch</p>
          <h3 className='AboutH1'>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='ContactMainForm'
          >
              <label>Your Name</label>
              <div className="enclosing_div">
                  <input
                      onChange={handleChange}
                      value={form.name}
                      type='text'
                      name='name'
                      placeholder="What's your good name?"
                      required
                  />
              </div>

              <label>Your email</label>
              <div className="enclosing_div">
                  <input
                      onChange={handleChange}
                      value={form.email}
                      type='email'
                      name='email'
                      placeholder="What's your web address?"
                      required
                  />
              </div>

              <label>Your Message</label>
              <div className="enclosing_div">
                  <textarea
                      rows={6}
                      onChange={handleChange}
                      value={form.message}
                      name='message'
                      placeholder='What you want to say?'
                      required
                      className="textarea input"
                  />
              </div>

              <button
                  type = 'submit'
                  className='btn1'
              >
                  {loading ? "Sending..." : "Send"}
              </button>
          </form>
        </motion.div>
        
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='ContactEarth'
        >
          <EarthCanvas />
        </motion.div>
      
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Thank you. I will get back to you as soon as possible.
          </Alert>
        </Snackbar>

        <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
          <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
            Ahh, something went wrong. Please try again.
          </Alert>
        </Snackbar>

        <motion.div 
        variants={slideIn("right", "tween", 0.3, 1)}
        className="wrapper socialMedia">
              <a href="https://www.facebook.com/anirudh.vadera.7/"><div className="button">
                  <div className="icon icon1">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
              </div></a>
              <a href="https://twitter.com/vadera_anirudh"><div className="button">
                  <div className="icon icon2">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
              </div></a>
              <a href="https://www.instagram.com/anirudhvadera/"><div className="button">
                  <div className="icon icon3">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
              </div></a>
              <a href="https://github.com/ANIRUDH-VADERA"><div className="button">
                  <div className="icon icon4">
                    <i className="fa-brands fa-github"></i>
                  </div>
              </div></a>
              <a href="https://www.linkedin.com/in/anirudh-vadera-8836ba237/"><div className="button">
                  <div className="icon icon5">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
              </div>  </a>   
              <a href="https://steamcommunity.com/id/BooGEYMaN___/"><div className="button">
                  <div className="icon icon6">
                    <i className="fa-brands fa-steam"></i>
                  </div>
              </div></a>
              <a href="https://leetcode.com/AnirudhVadera/"><div className="button">
                  <div className="icon icon7">
                    <i className="fa-brands fa-linode"></i>
                  </div>
              </div></a>
            </motion.div>

      </div>
  );
};

export default SectionWrapper(Contact,"contact");