import Image from "next/image";
import Waitlist from "@/components/Waitlist"
import Hero from "@/components/Hero"
import { BackgroundBeams } from "@/components/beamBg";
import Herobg from "@/components/Herobg";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[90%] gap-20">
        {/* <Hero/> */}
      
        <Herobg/>
       
        
      </div>

    </main>
  );
}
