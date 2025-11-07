import next from "next";
import { client } from "../client";
import { SanityDocument } from "next-sanity";


export const fetchContent = async (query: string) => {
  const options = { next: { revalidate: 30 } };
  const data = await client.fetch<SanityDocument[]>(query, {}, options);

  return data;
}