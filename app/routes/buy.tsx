import { ActionFunctionArgs, json } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "post") {
    return json({ message: "Method not allowed" }, 405);
  }

  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const items = values.cartData as string;
}
