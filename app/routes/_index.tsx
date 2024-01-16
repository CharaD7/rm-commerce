import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";

import { Product } from "~/lib/interface";
import { client } from "~/lib/sanity";

export const meta: MetaFunction = () => {
  return [
    { title: "Homepage | RM Commerce" },
    { name: "description", content: "Welcome to your number 1 online shop!" },
  ];
};

interface IAppProps {
  products: Product[];
}

// eslint-disable-next-line no-empty-pattern
export async function loader({}: LoaderFunctionArgs) {
  const query = `*[_type == "product"]{
    price,
    name,
    slug,
    "imageUrl": image[0].asset->url
  }`;

  const products = await client.fetch(query);

  return json({ products });
}

export default function Index() {
  const { products } = useLoaderData<typeof loader>() as IAppProps;

  return (
    <>
      <section className="flex flex-col justify-between gap-6 sm:gap-16 lg:flex-row mt-12">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-cyan-600 md:mb-6 md:text-lg xl:text-xl">
            Welcome to your number 1 online shop!
          </p>
          <h1 className="text-black mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Focus on tech that matters
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            Welcome to TechConnext, your ultimate destination for all things
            tech! Step into a world of innovation and discovery as we bring you
            the latest and greatest gadgets, electronics, and accessories.
          </p>
          <div>
            <Link
              to="#products"
              className="rounded-lg bg-cyan-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-cyan-300 duration-100 transition-colors hover:bg-cyan-700 focus:ring md:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product Highlight"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      <section id="products">
        <div className="py-24 sm:py-32 lg:pt-32">
          <div className="mt-6 grid gri-col-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <Link
                to={`/product/${product.slug.current}`}
                key={product.name}
                className="group relative"
              >
                <div className="w-full h-56 rounded-md overflow-hidden transition duration-300 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.imageUrl}
                    alt="Product preview"
                    className="w-full h-full object-center object-contain"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm font-bold text-gray-900">
                  ${product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
