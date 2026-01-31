interface Props {
  listaMostrada: string[];
  idioma: "español" | "ingles";
  setIdioma: (idioma: "español" | "ingles") => void;
}