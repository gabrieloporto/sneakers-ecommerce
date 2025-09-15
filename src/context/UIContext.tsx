import { createContext, useContext, useMemo, useState, ReactNode } from "react";

interface UIContextValue {
  menuIsActive: boolean;
  toggleMenu: () => void;

  modalDesktop: boolean;
  openModalDesktop: () => void;
  closeModalDesktop: () => void;
}

const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const toggleMenu = () => setMenuIsActive((v) => !v);

  const [modalDesktop, setModalDesktop] = useState(false);
  const openModalDesktop = () => setModalDesktop(true);
  const closeModalDesktop = () => setModalDesktop(false);

  const value = useMemo(
    () => ({
      menuIsActive,
      toggleMenu,
      modalDesktop,
      openModalDesktop,
      closeModalDesktop,
    }),
    [menuIsActive, modalDesktop]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUIContext(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUIContext must be used within UIProvider");
  return ctx;
}
