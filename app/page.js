import Image from "next/image";
import { promises as fs } from "fs";
import MoviesList from "./components/MoviesList";
import Hero from "./components/Hero";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/movies.json", "utf8");
  const data = JSON.parse(file);
  let IMG_STORAGE_URL = process.env.IMG_STORAGE_URL;

  return (
    <main>
      <div className="bg-background overflow-hidden text-text text-sm grid auto-rows-400 gap-1 font-poppins sm:grid-cols-auto-fit-16">
        <Hero />
        <MoviesList movies={data} imgStorageUrl={IMG_STORAGE_URL} />
      </div>
    </main>
  );
}
