import { useState } from "react";

export default function useModalState() {
  const [modalDesktop, setModalDesktop] = useState(false);

  const handleModalDesktop = () => setModalDesktop(true);

  return { modalDesktop, setModalDesktop, handleModalDesktop };
}
