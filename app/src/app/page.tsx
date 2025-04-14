import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function App() {
  return (
    <>
      <Button icon="pi pi-plus" className="mr-5" label="Increment"></Button>
      <h1 className="font-thin">Hola</h1>
      <InputText />
    </>
  );
}
