import Link from "next/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { loginAction } from "../lib/actions";

export default function Login() {
  return (
    <>
      <div className="w-full p-8">
        <Card title="Inicio de sesión" className="w-full">
          <form action={loginAction}>
            <label htmlFor="email" className="block mb-2">
              Correo
            </label>
            <InputText
              id="email"
              name="email"
              type="text"
              className="w-full mb-4"
              placeholder="example@example.com"
            />
            <label htmlFor="password" className="block mb-2">
              Contraseña
            </label>
            <InputText
              id="password"
              name="password"
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
        <Link href="/register">
          <Button
            className="block w-full mt-4"
            label="Registrarse"
            type="button"
            link
          />
        </Link>
      </div>
    </>
  );
}
