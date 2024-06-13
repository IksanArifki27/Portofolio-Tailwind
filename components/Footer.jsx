import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gradient-to-tr from-teal-500 to-cyan-500 lg:w-full">
        <h2 className="text-white text-center p-3">
          copyright &copy;{new Date().getFullYear()}
        </h2>
      </div>
    </footer>
  );
}
