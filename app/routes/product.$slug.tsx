import { Tab } from "@headlessui/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";

import { ProductId } from "~/lib/interface";
import { client } from "~/lib/sanity";

interface iAppProps {
  data: ProductId;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const query = `*[_type == "product" && slug.current == "${params.slug}"][0]`;

  const data = await client.fetch(query);

  return json({ data });
}

const ProductSlug = () => {
  const { data } = useLoaderData<typeof loader>() as iAppProps;

  return (
    <main className="mt-5">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* Image Selector */}
          <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {data.image.map((image) => (
                <Tab
                  key={image._key}
                  className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                >
                  {({ selected }) => (
                    <>
                      <span className="absolute inset-0 rounded-md overflow-hidden">
                        <img
                          src=""
                          alt="Product Preview"
                          className="w-full h-full object-center object-cover"
                        />
                      </span>
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </Tab.Group>
      </div>
    </main>
  );
};

export default ProductSlug;
