import React from "react";

const About = () => {
  return (
    <>
      <div className=" lg:w-[80%] w-full mx-auto h-full gap-4 mt-7 flex  px-6 py-10 lg:py-3 flex-col items-center md:flex-row justify-between bg-white rounded-tl-4xl rounded-tr-4xl shadow-lg shadow-slate-800">
        <div className="w-full text-2xl flex flex-col gap-3">
          <p className="text-slate-500 italic">
            "Code with Purpose: Crafting Scalable and Impactful Web Solutions
          </p>
          <div className="w-25 bg-slate-800 h-0.5"></div>
        </div>
        <div className="w-full text-justify py-7">
          <p>
            Hi, I'm <b>Naomi Ogundipe</b>, the developer behind NTDEV! As a{" "}
            <b>JavaScript-based Full Stack Developer</b>, I specialize in
            building dynamic, user-friendly web applications using the{" "}
            <b>MERN STACK with Tailwind CSS</b>with other dependencies.
          </p>
          <p>
            With a background in <b>Mass Communication</b>I bring a unique
            perspective to web development - focusing not just on functionality
            but also{" "}
            <b>effective communication, user experience and problem solving</b>
            .Every project i work on is designed to{" "}
            <b>solve real-world challenges</b> for startups, businesses, and
            individuals who need efficient,scalable and modern web solutions.
          </p>
          <p>
            I'm passionate about working with{" "}
            <b>startups,freelancers,remote teams or companies</b> looking for
            innovative,high performing websites. Whether you're launching a new
            product, optimizing an existing site,or seeking a dedicated
            developer for an internship or freelance project -{" "}
            <b>I'm here to bring your ideas to life!</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
