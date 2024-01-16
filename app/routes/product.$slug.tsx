import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";

import { client } from "~/lib/sanity";

export async function loader({ params }: LoaderFunctionArgs) {
  const query = `*[_type == "product" && slug.current == "${params.slug}"][0]`;

  const data = await client.fetch(query);

  return json({ data });
}

const ProductSlug = () => {
  const { data } = useLoaderData<typeof loader>();

  return <div>ProductSlug</div>;
};

export default ProductSlug;
