import { createClient } from "@sanity/client";

const projectId = "z3v20xj4";
const dataset = "production";
const apiVersion = "2022-03-07";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
