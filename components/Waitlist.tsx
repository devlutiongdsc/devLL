"use client";
import React from "react";
import { BackgroundBeams } from "./beamBg";
import { Helm } from "./canvas";

const Waitlist =()=> {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      
      <div className="max-w-2xl mx-auto p-4 flex gap-8">

        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Coming Soon
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntu
          </p>
        </div>
        <div className="pt-8 ml-5">
          <Helm />
        </div>
        
        {/* <input
          type="text"
          placeholder="sanyam@gmail.com"
          className="rounded-lg border pt-2 pb-2 pl-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 px w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
        
      </div>
        

      <div>
        
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Waitlist;
