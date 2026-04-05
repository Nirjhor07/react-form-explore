import "./App.css";
import ControlledForm from "./Components/ControlledFormHandling/ControlledForm";
import Form from "./Components/Form/Form";

function App() {
  return (
    <>
      <h2 className="text-5xl text-center font-bold">React form explore</h2>
      <div className="mx-auto justify-center  container flex min-h-screen mt-6">
        {/* normal form  */}
        {/* <Form></Form> */}
        {/* controlled form handling  */}
        <ControlledForm></ControlledForm>
      </div>
    </>
  );
}

export default App;
