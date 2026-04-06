import { useState } from "react";

const useHookCustom = (value) => {
  const [userInput, SetUserInput] = useState(value);
  const onChange = (e) => {
    SetUserInput(e.target.value);
  };

  return [userInput, onChange];
};

export default useHookCustom;
