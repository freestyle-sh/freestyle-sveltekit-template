// since there's no dynamic data here, we can prerender

import type Counter from "$lib/counter.js";
import { useCloud } from "freestyle-sh";


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const counter = useCloud<typeof Counter>("counter");
  const count = await counter.getCount();

  return {
    count
  };
}
