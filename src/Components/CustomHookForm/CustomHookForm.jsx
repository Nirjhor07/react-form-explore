import React from "react";
import useHookCustom from "../../CustomHooks/useHookCustom";

const CustomHookForm = () => {
  // prevent default to stop page reload
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  // using custom hook to handle onChange events
  //for name hnadle custom hook
  const [name, setOnChangeName] = useHookCustom("");
  //for email custom hook
  const [email, setOnChangeEmail] = useHookCustom("");
  // now for password custom hook
  const [password, setOnChangePassword] = useHookCustom("");

  return (
    <div className="mx-auto container">
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-4 items-center w-full max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          onChange={setOnChangeName}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="email"
          name="email"
          onChange={setOnChangeEmail}
          placeholder="type your email"
          required
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="password"
          name="password"
          onChange={setOnChangePassword}
          placeholder="password"
          required
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CustomHookForm;
