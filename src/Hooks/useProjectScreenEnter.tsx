import { useState } from "react";

export const useProjectScreenEnter = () => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

  const onMouseScreenEnter = () => {
    setIsMouseEnter(true);
  };
  const onMouseScreenLeave = () => {
    setIsMouseEnter(false);
  };

  return { isMouseEnter, onMouseScreenEnter, onMouseScreenLeave };
};
