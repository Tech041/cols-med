import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-green-800  text-white h-full" id="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-14  text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5 pt-5 text-white ">
                <span className="text-orange-500">Cols-</span>nutraceutical
              </p>
              <div className="p-2">
                <a href="#home" className="">
                  <img
                    src="/logo.webp"
                    alt=""
                    className="w-[70px] h-[70px] rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 pt-5 text-orange-600 ">
              Quick Link
            </p>
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer py-1">
                <Link onClick={() => scrollTo(0, 0)} to={"/"} className="">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"/about"} onClick={() => scrollTo(0, 0)} className="">
                  About
                </Link>
              </li>
              <li className="cursor-pointer py-1">
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/contact"}
                  className=""
                >
                  Contact Us
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/products"}
                  className=""
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 text-orange-600 ">
              Contact Us
            </p>
            <div className="">
              <div className="flex  items-center ">
                <div className="flex items-center justify-center gap-3 ">
                  <div className="">
                    <a
                      href="https://www.facebook.com/share/1BsrNLBAEd/"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaFacebookF size={20} color="white" />
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://www.instagram.com/kaceefresh"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaInstagram size={20} color="white" />
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://www.tiktok.com/@kaceefresh1"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaTiktok size={20} color="white" />
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://x.com/kaceefresh"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <RiTwitterXLine size={20} color="white" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <a
                  href="tel:+2348065057485"
                  className="flex items-center gap-3"
                >
                  <FaPhone size={15} color="white" />
                  <span className="">+2348065057485</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-xs text-center  ">
            Copyright &copy;Cols-nutraceutical {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
