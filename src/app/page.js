import Image from "next/image";
import {Navigator} from "../components/navigator"
import {Footer} from "../components/footer"
import {About} from "../components/about"
import {Proyects} from "../components/proyects"
import { Knowledge } from "@/components/knowledge";
export default function Home() {
  return (
    <main className="min-h-screen snap-mandatory snap-y">
      <Navigator></Navigator>
      <About></About>
      <Footer></Footer>
      <Knowledge></Knowledge>
      <Proyects></Proyects>
    </main>
  );
}
