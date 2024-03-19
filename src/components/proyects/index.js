import React from "react";
import Image from "next/image";
import styles from "./styles.modules.css";
export const Proyects = () => {
  const projects = [
    {
      id: 1,
      title: "TASK CREATOR",
      image: "/images/projects/task.jpeg",
      description:
        "En este proyecto desarrolle un sistema de gestion de tareas con titulo y descripcion en ReactJS con tailwindCSS",
      alt: "Task Creator",
    },
    {
      id: 2,
      title: "PORTFOLIO",
      image: "/images/projects/portfolio.png",
      description:
        "Este proyecto es un portfolio persona creado con NextJS y tailwind",
      alt: "Portfolio",
    },
  ];
  return (
    <div
      id="proyects"
      className="h-screen flex flex-col justify-center items-center snap-center w-full gap-12 mt-12"
    >
      <h3 className="font-bold text-4xl ">
        PROYECTOS
      </h3>
      <div className="proyects flex flex-col lg:flex-row items-center justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="proyect text-slate-600 flex   flex-col justify-center items-center w-6/12 lg:w-4/12 gap-6 rounded-md shadow-lg m-2 rounded-md "
          >
            <div className="relative aspect-video 	w-full h-40">
              <Image
                className="object-cover rounded-md"
                src={project.image}
                alt={project.alt}
                fill
              ></Image>
            </div>

            <div className="text-container flex-col p-6">
              <h6 className="font-bold text-2xl">{project.title}</h6>
              <p className="text-wrap font-bold text-lg">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
