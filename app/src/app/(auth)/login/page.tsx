import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

export default function Login() {
  return (
    <>
      <div className="w-full p-8">
        <Card title="Login" className="w-full">
          <form>
            <label htmlFor="email" className="block mb-2">
              Correo
            </label>
            <InputText
              id="email"
              type="text"
              className="w-full mb-4"
              placeholder="example@example.com"
            />
            <label htmlFor="password" className="block mb-2">
              Contraseña
            </label>
            <InputText
              id="password"
              className="w-full"
              type="password"
              placeholder="*****"
            />
            <Button
              className="block w-full mt-4"
              label="Iniciar sesión"
              type="submit"
            />
          </form>
        </Card>
      </div>
    </>
  );
}
