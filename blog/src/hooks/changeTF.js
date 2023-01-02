import { useCallback, useState } from "react";

export const ChangeTF = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback(
    (e) => {
      e.preventDefault();
      setValue((prev) => !prev);
    },
    [value]
  );
  return [value, handler, setValue];
};
