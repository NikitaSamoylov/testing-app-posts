import { useEffect, useState } from "react";

const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHeader, setIsHeader] = useState<string>('');
  const [isHeaderContent, setIsHeaderContent] = useState<boolean>(false);
  
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

  return [isOpen, isHeader, isHeaderContent, handleHeader] as const;
};

export {useToggleMenu};