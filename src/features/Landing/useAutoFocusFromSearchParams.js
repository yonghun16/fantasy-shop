import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const useAutoFocusFromSearchParams = (paramKey = "focus", paramValue = "true") => {
  const [searchParams] = useSearchParams();
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchParams.get(paramKey) === paramValue) {
      inputRef.current?.focus();
    }
  }, [searchParams, paramKey, paramValue]);

  return inputRef;
};

export default useAutoFocusFromSearchParams;
