import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Footer } from "flowbite-react";
export default function FooterCom() {
  return (
    <Footer
      container
      className="border border-b-3 border-t-2 border-pink-300 mt-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div>
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-lg font-semibold dark:text-white"
          >
            <span className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg text-white">
              BlogSite
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3  sm: mt-4 sm:grid-cols-3 sm:gap-4">
          <div
            className=" flex flex-col
          gap-4"
          >
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://www.javascript.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript
              </Footer.Link>
            </Footer.LinkGroup>
            <Footer.LinkGroup col>
              <Footer.Link href="/about" rel="noopener noreferrer">
                Project Author
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div
            className=" flex flex-col
          gap-4"
          >
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://www.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Footer.Link>
            </Footer.LinkGroup>
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
