import Image from "next/image";
import {Navigator} from "../components/navigator"
import {Footer} from "../components/footer"
import {About} from "../components/about"
import { Knowledge } from "@/components/knowledge";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigator></Navigator>
      <About></About>
      <Footer></Footer>
      <Knowledge></Knowledge>
    </main>
  );
}
