import type { NextApiHandler } from "next";
import { SwapiPeopleResponse } from "../../types";

const handler: NextApiHandler = async (_, res) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/`);
    const json = (await response.json()) as SwapiPeopleResponse;

    const index = Math.floor(Math.random() * (json.results.length - 1));
    const person = json.results[index];

    res.status(200).json(person);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "server error" });
  }
};

export default handler;
