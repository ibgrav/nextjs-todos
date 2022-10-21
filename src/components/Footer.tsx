import { useEffect, useState } from "react";
import { fetchSwapiPerson } from "../lib/fetch-swapi-person";
import { SwapiPerson } from "../types";

let rendered = false;

interface FooterProps {
  renderDate: string;
}

export function Footer({ renderDate }: FooterProps) {
  const [person, setPerson] = useState<SwapiPerson>();

  useEffect(() => {
    if (!rendered) {
      rendered = true;

      fetchSwapiPerson().then((person) => {
        if (person) setPerson(person);
      });
    }
  }, []);

  return (
    <footer className="flex flex-col md:flex-row justify-between">
      {<div>SWAPI Person: {person?.name}</div>}
      <div>Rendered at: {renderDate}</div>
    </footer>
  );
}
