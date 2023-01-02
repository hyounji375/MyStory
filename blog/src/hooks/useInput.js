import { useCallback, useState } from "react";

const UseInput = (initialValue = null) => {
  const [value, setter] = useState(initialValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler, setter];
};
export default UseInput;
