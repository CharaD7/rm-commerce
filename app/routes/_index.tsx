import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Homepage | RM Commerce" },
    { name: "description", content: "Welcome to your number 1 online shop!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to the homepage</h1>
    </div>
  );
}
