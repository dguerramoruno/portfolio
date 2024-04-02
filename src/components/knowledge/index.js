import Image from "next/image";
import styles from './styles.modules.css'
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
    route: "/images/React.png",
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
    <div className="knowledge  h-full lg:h-screen snap-center relative flex flex-col gap-6 top-0 z-[-2] p-60 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <h3 className="font-bold text-2xl lg:text-8xl text-gray mt-60 ">TECNOLOGIAS:</h3>
      <p className="text-gray text-center text-md lg:text-2xl">Estas son las tecnologias que utilizado en mis projectos:</p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
        {languages.map((language) => (
          <div
            key={language.id}
            className=" divs-lang flex-col  justify-center items-center p-6 rounded-md shadow-sm  m-2 animate-fade-in-down"
          >
            <Image
              className="object-contain langs "
              src={language.route}
              width={100}
              height={100}
              alt={language.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
