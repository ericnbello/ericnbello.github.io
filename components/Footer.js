import React from "react";
import userData from "@constants/data";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn"
import Linktree from "./icons/Linktree";
import Nextjs from "./icons/Nextjs";
import Image from 'next/image'
import VisitorCounter from "./VisitorCounter";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10"> 
       {/* md:py-20"> */}
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div className="flex flex-row justify-center">
            <p>Copyright &copy; { currentYear } - <span><a className="hover:font-bold" href="https://www.github.com/ericnbello">ericnbello</a></span>. </p>
          </div>
          <div className="flex flex-row justify-center">
            <p className="flex flex-row">Built with 
              <a className="px-2" href="https://www.nextjs.com">
                <svg fill="currentColor" className="fill-black dark:fill-white h-6 w-6 mx-1" height="1024pt" viewBox=".5 -.2 1023 1024.1" width="1024pt" xmlns="http://www.w3.org/2000/svg"><path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"/><path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"/></svg>
              </a>  
              <a className="px-2" href="https://www.tailwindcss.com">
                <img src="/tailwind.svg" className="h-6 w-6 mx-1"/>
              </a>
              <a className="px-2" href="https://www.aws.amazon.com">
                {/* <img src="/aws-logo.svg" className="h-7 w-7 mx-1"/> */}
               <svg className="fill-black dark:fill-white h-7 w-7 mx-1" viewBox="0 -51.5 256 256">
                  <path fill="currentColor" d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95 0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763-.847 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001-6.612 7.798-14.92 11.698-24.922 11.698-7.12 0-12.8-2.035-16.954-6.103-4.153-4.07-6.272-9.495-6.272-16.276 0-7.205 2.543-13.054 7.714-17.462 5.17-4.408 12.037-6.612 20.768-6.612 2.882 0 5.849.254 8.985.678 3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563-2.712-2.628-7.29-3.9-13.817-3.9-2.967 0-6.018.34-9.155 1.103-3.136.762-6.188 1.695-9.155 2.882-1.356.593-2.373.932-2.967 1.102-.593.17-1.017.254-1.356.254-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966.424-.594 1.187-1.187 2.374-1.78 2.967-1.526 6.527-2.798 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866 4.662 4.577 7.036 11.528 7.036 20.853v27.464h.17ZM37.976 68.323c2.798 0 5.68-.508 8.731-1.526 3.052-1.017 5.765-2.882 8.053-5.425 1.357-1.61 2.374-3.39 2.882-5.425.509-2.034.848-4.493.848-7.375v-3.56a70.791 70.791 0 0 0-7.799-1.441 63.874 63.874 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391-2.798 2.289-4.154 5.51-4.154 9.748 0 3.984 1.017 6.951 3.136 8.986 2.035 2.119 5.002 3.136 8.901 3.136Zm68.069 9.155c-1.526 0-2.543-.254-3.221-.848-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391 0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848.678.509 1.187 1.696 1.695 3.306l14.241 56.117 13.224-56.117c.424-1.695.933-2.797 1.61-3.306.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119 0 .424-.085.848-.17 1.356-.085.509-.254 1.187-.593 2.12l-20.43 65.525c-.508 1.696-1.101 2.798-1.78 3.306-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391-.678.594-1.865.848-3.39.848h-7.291Zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526-4.239-1.017-7.544-2.12-9.748-3.39-1.357-.764-2.29-1.611-2.628-2.374a5.983 5.983 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46.108 46.108 0 0 0 9.324 2.967 50.907 50.907 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797 2.882-1.865 4.408-4.577 4.408-8.053 0-2.373-.763-4.323-2.289-5.934-1.526-1.61-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647-2.797-3.73-4.238-7.883-4.238-12.291 0-3.56.763-6.697 2.289-9.41 1.525-2.712 3.56-5.085 6.103-6.95 2.543-1.95 5.425-3.391 8.816-4.408 3.39-1.017 6.95-1.441 10.68-1.441 1.865 0 3.815.085 5.68.339 1.95.254 3.73.593 5.51.932 1.695.424 3.306.848 4.832 1.357 1.526.508 2.712 1.017 3.56 1.525 1.187.679 2.034 1.357 2.543 2.12.509.678.763 1.61.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713-.678 0-1.78-.34-3.22-1.018-4.833-2.204-10.258-3.306-16.276-3.306-4.832 0-8.647.763-11.275 2.374-2.627 1.61-3.984 4.069-3.984 7.544 0 2.374.848 4.408 2.543 6.019 1.696 1.61 4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137 2.628 3.476 3.9 7.46 3.9 11.868 0 3.645-.764 6.951-2.205 9.833-1.525 2.882-3.56 5.425-6.188 7.46-2.628 2.119-5.764 3.645-9.409 4.747-3.815 1.187-7.799 1.78-12.122 1.78Z"/>
                  <path fill="#F90" d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534-48.827 0-92.821-18.056-126.05-48.064-2.628-2.373-.255-5.594 2.881-3.73 35.942 20.854 80.276 33.484 126.136 33.484 30.94 0 64.932-6.442 96.212-19.666 4.662-2.12 8.646 3.052 4.068 6.442Zm11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102-2.713.34-3.137-2.034-.678-3.814 15.936-11.19 42.13-7.968 45.181-4.239 3.052 3.815-.848 30.008-15.767 42.554-2.288 1.95-4.492.933-3.475-1.61 3.39-8.393 10.935-27.296 7.375-31.789Z"/>
                </svg>
              </a>
            </p>
          </div>
          <div className="space-x-4 flex flex-row justify-center items-center">
            <a
              href={userData.socialLinks.github}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <Github />
            </a>
            <a
              href={userData.socialLinks.twitter}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter h-5 w-5"
                // viewBox="0 0 16 16"
                viewBox="0 0 512 462.799"
              >
                {/* X icon */}
                <path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                {/* Twitter icon */}
                {/* <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> */}
              </svg>
            </a>
            <a
              href={userData.socialLinks.linkedin}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <LinkedIn />
            </a>
            <a
            href={userData.socialLinks.linktree}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <Linktree />
          </a>
          </div>
          {/* <div className="flex flex-row justify-center items-center md:justify-end">
            <VisitorCounter />
          </div> */}
        </div>
      </div>
    </div>
  );
}
