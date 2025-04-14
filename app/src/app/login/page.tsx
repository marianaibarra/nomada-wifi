import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

export default function Login() {
  return (
    <>
      <Card title="Login">
        <form>
          <label htmlFor="email" className="block">
            Correo
          </label>
          <InputText id="email" type="text" placeholder="example@example.com" />
          <label htmlFor="password" className="block">
            Contraseña
          </label>
          <InputText id="password" type="password" placeholder="*****" />
          <Button className="block w-full mt-2" label="Login" type="submit" />
        </form>
      </Card>
    </>
  );
}
