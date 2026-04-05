import React, { useRef, useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState("");
  //usestate for error
  const [error, setError] = useState("");

  // we can use useref as well for the same shitt!!!
  const emailRef = useRef("");
  const passwordRef = useRef("");

  //function for handle form events
  const handleFormAction = (e) => {
    e.preventDefault();
    // console.log(e.target.password.value);
    // setPassword(e.target.password.value);
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("email:", email, "\npassword:", password);
  };

  // function for on change event handle
  const onChangeEvent = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 7) {
      setError("password must me 7 character long ");
    } else {
      setError("");
    }
  };

  return (
    <div className="mx-auto container">
      <form
        onSubmit={handleFormAction}
        className="flex flex-col gap-4 items-center w-full max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="email"
          name="email"
          ref={emailRef}
          placeholder="type your email"
          required
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="password"
          name="password"
          id=""
          ref={passwordRef}
          placeholder="password"
          defaultValue={password}
          onChange={onChangeEvent}
          required
        />
        <p className="text-red-600 text-left items-start">
          <small>{error}</small>
        </p>

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default ControlledForm;
