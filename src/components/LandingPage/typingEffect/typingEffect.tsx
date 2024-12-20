"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingEffectProps {
  strings: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ strings }) => {
  const typedElement = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings,
        typeSpeed: 50,
        backDelay: 3000,
        backSpeed: 25,
        loop: true,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
      });
    }

    // Cleanup Typed instance on component unmount
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [strings]);

  return <span ref={typedElement}></span>;
};

export default TypingEffect;
