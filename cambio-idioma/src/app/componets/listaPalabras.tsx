"use client";

export default function ListaPalabras({listaMostrada,idioma, setIdioma}: Props) 
{
  
    return (
    <>
      <ul>
        {listaMostrada.map((palabra) => (
          <li key={palabra}>
            <p className="text-center text-2xl font-semibold text-white">
              {palabra}
            </p>
          </li>
        ))}
      </ul>

              <div className="flex justify-between items-center w-full mt-8">
        <button
          onClick={() => setIdioma("español")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 transition"
        >
          Cambiar Idioma Español
        </button>

        <button
          onClick={() => setIdioma("ingles")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 transition"
        >
          Cambiar Idioma Ingles
        </button>
      </div>


    </>
  );
}