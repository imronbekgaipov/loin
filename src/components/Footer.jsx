import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-300 py-4 text-center font-medium dark:bg-slate-700">
      <p className="dark:text-slate-200">
        Created by Imronbek Web {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
