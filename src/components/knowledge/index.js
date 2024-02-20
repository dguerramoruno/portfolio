import Image from "next/image";
import styles from "./styles.modules.css";

const languages = [
  {
    id: 1,
    route: "/images/html.png",
    alt: "HTML",
  },
  {
    id: 2,
    route: "/images/css3.png",
    alt: "CSS",
  },
  {
    id: 3,
    route: "/images/react.svg.png",
    alt: "REACT",
  },
  {
    id: 4,
    route: "/images/java.png",
    alt: "JAVA",
  },
  {
    id:5,
    route: "/images/javascript.png",
    alt:"JAVASCRIPT"
  },
  {
    id:6,
    route: "/images/php.png",
    alt:"PHP"
  },
  {
    id:7,
    route:"/images/laravel.png",
    alt:"LARAVEL"
  },
  {
    id:8,
    route:"/images/tailwind.png",
    alt:"TAILWIND"
  }
];
export const Knowledge = () => {
  return (
    <div className="knowledge h-screen">
      <h3 className="font-bold text-2xl ">SKILLS:</h3>
      <p>Estas son las tecnologias que utilizado en mis projectos:</p>
      <div className="grid grid-cols-4 gap-6">
        {languages.map((language) => (
          <div
            key={language.id}
            className=" bg-slate-200 flex-col justify-center items-center p-6 rounded-md shadow-md m-2"
          >
            <Image
              className="object-contain"
              src={language.route}
              width={100}
              height={100}
              alt={language.alt}
            />
            <span className="text-center">{language.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
