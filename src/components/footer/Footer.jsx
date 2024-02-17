import React from 'react';
import token from '../../assets/Token.png';
import appstore from '../../assets/appstore.png';
import playstore from '../../assets/playstore.png';
import './footer.css';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IoMdCall } from 'react-icons/io';
import { MdMarkEmailRead } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="section footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link to="#">
              <img
                src={token}
                width={80}
                height={25}
                loading="lazy"
                alt="Token home"
              />
            </Link>

            <p className="body-md footer-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing el.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="title-lg footer-list-title">Token</p>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Explore Item</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Live Auction</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Activities</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Wallets</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Creators</span>
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="title-lg footer-list-title">Useful Links</p>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">About Us</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Blog & News</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Terms & Condition</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Privacy policy</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Login</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <IoChevronForwardOutline size={15} />

                <span className="span">Contact Us</span>
              </Link>
            </li>
          </ul>

          <div className="footer-list">
            <ul>
              <li>
                <p className="title-lg footer-list-title">
                  Download the Token app
                </p>
              </li>

              <li className="footer-list-item">
                <Link to="#">
                  <img
                    src={appstore}
                    width="154"
                    height="40"
                    loading="lazy"
                    alt="Download Token app from AppStore"
                  />
                </Link>

                <Link to="#">
                  <img
                    src={playstore}
                    width="154"
                    height="40"
                    loading="lazy"
                    alt="Download Token app from PlayStore"
                  />
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <p className="title-lg footer-list-title">Contact Details</p>
              </li>

              <li className="footer-list-item">
                <MdMarkEmailRead size={18}></MdMarkEmailRead>

                <Link to="#" className="footer-link">
                  example@nft.com
                </Link>
              </li>

              <li className="footer-list-item">
                <IoMdCall size={18}></IoMdCall>

                <Link to="#" className="footer-link">
                  +111 234-567-891
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="body-md text-center copyright">
            &copy; 2024 Token. Developed with <span className="span">❤</span> by
            Zoubair hattab.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
