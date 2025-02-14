import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectGallery = () => {
  return (
    <>
      <div className="w-full h-full p-3  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 justify-center items-center ">
        <ProjectItem
          header="header"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam magnam
                  aut eius aspernatur ut rerum magni molestias deserunt. "
        />
        <ProjectItem
          header="header"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam magnam
                  aut eius aspernatur ut rerum magni molestias deserunt. "
        />
        <ProjectItem
          header="header"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam magnam
                  aut eius aspernatur ut rerum magni molestias deserunt. "
        />
      </div>
    </>
  );
};

export default ProjectGallery;
