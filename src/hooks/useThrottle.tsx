import { useEffect, useState } from "react";

const useThrottle = (value, delay = 200) => {
  const [trottledValue, setTrottledValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return trottledValue;
};

export default useThrottle;
