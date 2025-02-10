import React from "react";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import Primarybtn from "../Buttons/Primarybtn";
const Skills = ({ skill }) => {
  return (
    <>
      <div className="h-full w-full bg-white p-12 flex flex-col gap-5 items-center">
        <p className="text-6xl font-bold uppercase">Skills</p>
        <div className="w-[100%] h-full p-4 flex gap-4 flex-wrap items-center justify-center mx-auto">
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <FaNodeJs className="w-full h-full text-gray-500" />
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              Node.js
            </p>
          </div>
         
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <FaReact className="w-full h-full text-gray-500" />
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              react.js
            </p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
              </svg>
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              Express.js
            </p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" />
              </svg>
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              tailwindcss
            </p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z" />
              </svg>
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              javascript
            </p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M27.235 13.885c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 01-.491-.491V37.827a.491.491 0 01.491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 44.096H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24v17.548h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z" />
              </svg>
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              bootstrap
            </p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 012.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333 3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z" />
              </svg>
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">git</p>
          </div>
        </div>
        <Primarybtn text={"See More"}/>
      </div>
    </>
  );
};

export default Skills;

 {/* <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <FaHtml5 className="w-full h-full text-gray-500" />
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              HTML5
            </p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col p-3 items-center gap-3">
            <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center">
              <FaCss3 className="w-full h-full text-gray-500" />
            </div>
            <p className="uppercase text-slate-800 font-semibold italic">
              CSS3
            </p>
          </div> */}