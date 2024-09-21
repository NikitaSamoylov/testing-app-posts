import { useEffect, useRef, useState } from "react";

const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHeader, setIsHeader] = useState<string>('');
  const [isHeaderContent, setIsHeaderContent] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  
  const handleHeader = () => {
    return setIsOpen(isOpen => !isOpen);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsHeader('');
      return setIsHeaderContent(false);
    };
  
    const fadeIn = setTimeout(() => {
      setIsHeader('Awesome blog');
      setIsHeaderContent(true);
    }, 300)

    return () => clearInterval(fadeIn)
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutside);
    
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [handleHeader]);

  const checkIfClickedOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handleHeader()
    }
  };

  return [isOpen, isHeader, isHeaderContent, handleHeader, ref] as const;
};

export {useToggleMenu};