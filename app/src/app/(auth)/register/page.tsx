import Link from "next/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { registerAction } from "../lib/actions";

export default function Register() {
  return (
    <>
      <div className="w-full p-8">
        <Card title="Registro" className="w-full">
          <form action={registerAction}>
            <label htmlFor="username" className="block mb-2">
              Nombre de usuario
            </label>
            <InputText
              id="username"
              name="username"
              type="text"
              className="w-full mb-4"
              placeholder="m_i_n_j_i"
            />
            <label htmlFor="name" className="block mb-2">
              Nombre
            </label>
            <InputText
              id="name"
              name="name"
              type="text"
              className="w-full mb-4"
              placeholder="Nombre"
            />
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
              label="Registrarse"
              type="submit"
            />
          </form>
        </Card>
        <Link href="/login">
          <Button
            className="block w-full mt-4"
            label="Iniciar sesión"
            type="button"
            link
          />
        </Link>
      </div>
    </>
  );
}
