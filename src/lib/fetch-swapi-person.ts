import { SwapiPerson } from "../types";

export async function fetchSwapiPerson() {
  try {
    const res = await fetch("/api/swapi");
    return (await res.json()) as SwapiPerson;
  } catch (e) {
    console.error(e);
  }
}
