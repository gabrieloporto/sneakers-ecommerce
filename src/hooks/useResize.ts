import { useEffect, useState } from "react";

export default function useResize() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenSize };
}
