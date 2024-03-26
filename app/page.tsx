import Image from "next/image";
import Waitlist from "@/components/Waitlist"
import Hero from "@/components/Hero"
import { BackgroundBeams } from "@/components/beamBg";


export default function Home() {
  return (
    <main className="">
      
      <div>
        {/* <Hero/> */}
        <Waitlist />
        {/* <BackgroundBeams /> */}
      </div>

    </main>
  );
}
