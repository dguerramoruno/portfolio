"use client";
import styles from "./styles.modules.css";
import Link from "next/navigation";
import { useState, useEffect } from "react";

export const Navigator = () => {
  const [date, setDate] = useState("00:00:00");
  const [song, setSongData] = useState(null);
  //Funcion para sacar la fecha actual
  const getDate = () => {
    let day = new Date().getDay;
    let intervalId = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  };
  //Funcion para sacar la cancion actualmente reproduciendose
  const fetchData = async () => {
    try {
      const response = await fetch("/api/getSongs", {
        next : {cache: "no-store",revalidate: 0}
      });
      const data = await response.json();
      console.log(data)
      setSongData(data);
    } catch (error) {
      console.error("Error fetching song data:", error);
    }
  };
  
  useEffect(() => {
    getDate();
    fetchData();
  }, []);

  return (
    <nav className={`p-12 w-screen flex flex-col lg:flex-row lg:gap-12 h-20 items-center justify-between opacity-95 text-gray-200 fixed z-10 fixed top-0 z-2  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
      <div className="flex flex-col">
        <h1 className="text-2xl font-black drop-shadow-md items-center">
          David Guerra Moruno
        </h1>
        <span>{date}</span>
      </div>
      <div className="w-30">
        <a className="mr-4 text-xl font-bold" href="/#about">
          Sobre Mi
        </a>
        <a className="mr-4 text-xl font-bold" href="/#proyects">
          Proyectos
        </a>
        <a className="mr-4 text-xl font-bold" href="/contact">
          Contacto
        </a>
      </div>
      <div>
      {song ? (
        <div className="flex items-center space-x-4 invisible lg:visible">
          
          <div>
            <p className="font-bold">{song.item.name}</p>
            <p className="text-gray-600">
              {song.item.artists.map((artist, index) => (
                <span key={artist.id}>
                  {artist.name}
                  {index !== song.item.artists.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
          <img
            className="h-20 rounded-md"
            src={song.item.album.images[0].url}
            alt="currentSong"
          />
        </div>
      ) : <p>Nada reproduciendose</p>}
      </div>
    </nav>
  );
};
