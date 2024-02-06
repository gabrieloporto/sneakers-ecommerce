import { useState } from "react";

export default function useMenu() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const handleMenu = () => setMenuIsActive(!menuIsActive);

  return { menuIsActive, handleMenu };
}
