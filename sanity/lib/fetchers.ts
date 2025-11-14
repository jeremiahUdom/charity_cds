import next from "next";
import { client } from "../client";
import { SanityDocument } from "next-sanity";


export const fetchContent = async <T = SanityDocument | SanityDocument[]>(query: string, params: Record<string, unknown> = {}): Promise<T> => {
  const options = { next: { revalidate: 30 } };
  const data = await client.fetch<T>(query, params, options);

  return data;
}
