import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#58C3E5] p-4 font-bold text-[#FFFFFF]">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          BlogFinder
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
