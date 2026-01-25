import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed: number = 35) {
  const [output, setOutput] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    setOutput("");
    setIsDone(false);

    let i = 0;
    const interval = setInterval(() => {
      setOutput(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { output, isDone };
}
