import { useCallback, useState } from "react";

const useInput = (initalValue = null) => {
  const [data, setData] = useState(initalValue);

  const handler = useCallback(
    (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    },
    [data]
  );
  return [data, handler, setData];
};

export default useInput;
