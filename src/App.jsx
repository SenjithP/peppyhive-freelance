import { FaStarOfLife } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";

import "./App.css";

const App = () => { 
    const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/__cloud.s______?igsh=MWZ6cTF2OGFsdWo5Yw==", "_blank");
  };
  const handleWhatsappClick = () => {
    window.open("https://wa.me/9421533464", "_blank");
  };
 
  const cardData = [
    {
      title: "Projects We Dominate",
      content: "3D CAD, Ansys projects, Fabrication projects",
    },
    {
      title: "Step into peppyhive'ers",
      content:
        "Step into a world where creativity meets skills with peppy_hive",
    },
    { title: "Always ONN!", content: "24/7 Coverage, Ping Us!" },
    {
      title: "Need Guidance",
      content:
        "We've got the fixes. Bring us your challenges, and we'll handle the rest",
    },
    {
      title: "Project Mastery",
      content:
        "Welcome to the blend of creativity and mastery at peppy_hive. Let's bring your visions to life together",
    },
    {
      title: "And we assist you on presentations too :)",
      content:
        "Get Hands-On Projects: Detailed Reports & 10-Hour Classes to ace Presentations Without Hassle!",
    },
  ];
  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>peppyhive</h1>
        <h2>Yep!! You landed right</h2>
      </motion.nav>

      <div className="container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>__peppy_hive__</h1>
          <p>
            At peppyhive, we believe any dreams can be achieved if we work
            towards it single step at a time.
          </p>
          <button onClick={scrollToFooter}>Contact Us</button>
          <img
            src="https://images.ctfassets.net/17si5cpawjzf/5sVSqbCFE6oYMkmS7VBbuY/bdba1dd03501a4bc68614a000de0a9a9/mechanical-design-sw-is1352825017-og-1200x630.jpg"
            alt="Peppyhive"
          />
        </motion.div>
        <hr />
        <div className="section1">
          <div className="heading">
            <FaStarOfLife />
            <h1>Now, Let's Talk Biz!</h1>
            <p>Stay positive, work hard, make it happen.</p>
          </div>
          <div className="sectiona">
            <div className="description">
              <p>
                {" "}
                <GoNorthStar />
              </p>

              <h3>Departmental Mastery on - </h3>
              <p>
                {" "}
                <TiTick /> Mechanical & Mechatronics Engineering
              </p>
              <p>
                {" "}
                <TiTick /> Electronics & Electrical Engineering
              </p>
              <p>
                {" "}
                <TiTick /> Computer Science Engineering
              </p>
            </div>
            <div className="image">
              <img
                src="https://cdn.itm.ac.in/2024/05/tech-jobs-in-India--5--1.webp"
                alt="Engineering"
              />
            </div>
          </div>
          <div className="sectionb">
            <div className="image">
              <img
                src="https://www.teslamechanicaldesigns.com/image/about4.jpg"
                alt="Engineering"
              />
            </div>
            <div className="description">
              <p>
                {" "}
                <GoNorthStar />
              </p>
              <h3>Bring It On, let's see - </h3>
              <p>Branches Don't Matter, Let's Collaborate On Ideas!</p>
              <p>After all we are all just engineers</p>
              <p>So let's make things happen.</p>
              <p>
                <TiTick />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <motion.div
          className="section2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="headinga">
            <FaStarOfLife />
            <h1>A passion for creating "lit AF" projects</h1>
            <p>
              Our dope range of services covers everyone from regular folks to
              big players in the game, whether you're chilling at home or making
              moves in the engineering world.
            </p>
          </div>
          <motion.div
            className="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {cardData.map((card, index) => (
              <motion.div
                className="card"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p>
                  <GoNorthStar />
                </p>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <hr />
        <footer  id="footer" className="footer">
          <h1>"Your ideas and our hustle. - As simple as that"</h1>

          <div className="footer-content">
            <div className="social-icons">
              <FaWhatsapp onClick={handleWhatsappClick} />
              <FaInstagram onClick={handleInstagramClick}  />
              <FiFacebook />
            </div>
            <p>@__nino__enfermo______</p>
            <p>Founder</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
