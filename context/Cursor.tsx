import type { ReactNode, RefObject } from 'react';
import { useState, useEffect, useRef, createContext } from 'react';
import { checkIsMobile } from '../utils';

type CursorProps = {
  children: ReactNode;
};

export type CursorContext = {
  isMobile: boolean;
  cursorRef: RefObject<HTMLDivElement> | null;
};

const defaultCtx: CursorContext = {
  isMobile: false,
  cursorRef: null,
};

export const CusrorContext = createContext<CursorContext>(defaultCtx);

const CursorState = function CursorState({ children }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(checkIsMobile());
  }, []);

  return (
    <CusrorContext.Provider value={{ isMobile, cursorRef }}>
      {children}
    </CusrorContext.Provider>
  );
};

export default CursorState;
