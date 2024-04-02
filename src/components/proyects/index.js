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
      repo: "https://github.com/dguerramoruno/react-tasks-app",
      page: "https://react-tasks-app-phi.vercel.app/",
    },
    {
      id: 2,
      title: "PORTFOLIO",
      image: "/images/projects/portfolio.png",
      description:
        "Este proyecto es un portfolio persona creado con NextJS y tailwind",
      alt: "Portfolio",
      repo:"https://github.com/dguerramoruno/portfolio"
    },
    {
      id: 3,
      title: "GESTOR DENUNCIAS ANONIMAS",
      image: "/images/projects/denuncias.jpg",
      description:
        "Este proyecto continue una aplicacion para crear denuncias y otra para gestionarlas, creado con Laravel",
      alt: "ComplainsGenerator",
      repo:"https://github.com/dguerramoruno/Complains"
    },
  ];
  return (
    <div
      id="proyects"
      className="proyects h-screen flex flex-col justify-center items-center snap-center w-full gap-12  mt-96"
    >
      <h3 className="font-bold text-6xl ">PROYECTOS</h3>
      <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center gap-6 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" text-slate-600 flex   flex-col justify-center items-center w-6/12 lg:w-4/12 gap-6 rounded-md shadow-lg m-2 rounded-md "
          >
            <div className="relative aspect-video 	w-full h-40">
              <Image
                className="object-cover rounded-md "
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
            <a href={project.repo}>
              <button
                type="button"
                class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  class="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Accede al Repositorio
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
