"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

type LoginInput = z.infer<typeof loginSchema>;

const registerSchema = z.object({
  username: z.string().min(4).max(20),
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

type RegisterInput = z.infer<typeof registerSchema>;

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const parsed = loginSchema.safeParse({
    email: email as string,
    password: password as string,
  });

  if (!parsed.success) {
    console.error("Los datos de inicio de sesión no son válidos");

    console.error({
      errors: parsed.error.errors.map((error) => ({
        message: error.message,
      })),
    });

    redirect("/login");
  }

  const request = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const response = await request.json();

  if (response.statusCode === 201) {
    const jwt = response.data.access_token;

    redirect(`/?token=${jwt}`);
  }

  console.log("No se pudo iniciar sesión");
}

export async function registerAction(formData: FormData) {
  const username = formData.get("username");
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const parsed = registerSchema.safeParse({ username, name, email, password });

  if (!parsed.success) {
    console.error("Los datos de registro no son válidos");
    console.error({
      errors: parsed.error.errors.map((error) => ({ message: error.message })),
    });

    redirect("/register");
  }

  const request = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, name, email, password }),
  });

  const response = await request.json();

  if (response.statusCode === 201) {
    console.log("response", response);

    redirect(`/login?${email}`);
  }

  console.log("No se pudo registrar");
}

export async function logoutAction() {
  const request = await fetch("http://localhost:3000/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  if (response.statusCode === 200) {
    redirect("/");
  }

  console.log("No se pudo cerrar sesión");
}
