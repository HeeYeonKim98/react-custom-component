import { useCallback, useState } from "react";

const useToggle = (initalValue) => {
  const [data, setData] = useState(initalValue);

  return [data, useCallback(() => setData((toggle) => !toggle)), setData];
};

export default useToggle;
