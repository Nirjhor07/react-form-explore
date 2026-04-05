import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    // ei function use korar uddesho hoilo form submit take eikahneii pause kore rakha
    // sdo that submitted data gula acces and egula niye jeno kam kora jay
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log("Form submitted");
  };

  return (
    <div className="mx-auto container">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-full max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          className="flex flex-col gap-4 items-center w-full max-w-md mx-auto"
          type="email"
          name="email"
          placeholder="type your email"
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Form;
