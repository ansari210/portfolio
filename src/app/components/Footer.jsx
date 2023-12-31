import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
       <span> Email: <Link href={"mailto:jet.ansari.col@gmail.com"} > jet.ansari.col@gmail.com</Link></span>  
        <p className="text-slate-600">All rights reserved By Ms. Ansari. </p>
      </div>
    </footer>
  );
};

export default Footer;
