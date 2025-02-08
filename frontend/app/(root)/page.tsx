import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log("O que eu estou fazendo aqui ? -- SERVER/");
  return (
    <>
      <h1 className="text-3xl font-bold">Olá Mundo !</h1>
      <Hello/>
    </>
  );
}
