"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./revealCard";



const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-950 h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="I know the chemistry"
        revealText="You know the business"
      >
        {/* <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}

export default Hero;
