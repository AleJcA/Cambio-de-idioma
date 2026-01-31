"use client";
import { useEffect, useState } from "react";
import ListaPalabras from "./componets/listaPalabras";


export default function Home() {
  
  const [listaPalabras] = useState<Palabras[]>([
    { palabra: "Casa", traduccion: "House" },
    { palabra: "Perro", traduccion: "Dog" },
    { palabra: "Comida", traduccion: "Food" },
    { palabra: "Escuela", traduccion: "School" },
    { palabra: "Lapiz", traduccion: "Pencil" },
  ]);

  const [idioma, setIdioma] = useState<"español" | "ingles">("español");
  const [listaMostrada, setListaMostrada] = useState<string[]>([]);

  useEffect(() => {
    if (idioma === "español") {
      setListaMostrada(listaPalabras.map(p => p.palabra));
    } else {
      setListaMostrada(listaPalabras.map(p => p.traduccion));
    }
  }, [idioma, listaPalabras]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-3xl mx-auto">
      <h1 className="mb-4 text-center text-3xl font-bold text-white">
        Lista de palabras
      </h1>

      <ListaPalabras
        listaMostrada={listaMostrada}
        idioma={idioma}
        setIdioma={setIdioma}
      />
       
    </div>
  );
}