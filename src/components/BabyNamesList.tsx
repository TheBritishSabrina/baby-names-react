import { useState } from "react";
import babyNamesData from "../babyNamesData.json";
import BabyName from "./BabyName";
import { babyNameI } from "../types/BabyNameI";

export default function BabyNamesList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState<babyNameI[]>([]);

  function compareFunction(
    firstBabyName: babyNameI,
    secondBabyName: babyNameI
  ) {
    const firstName = firstBabyName.name;
    const secondName = secondBabyName.name;
    return firstName.localeCompare(secondName);
  }

  // add favourites display, only when favourites exist
  // add onclick to add name to favourites
  // filter names by not in favourites

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h2>Favourites</h2>
      {favourites
        .filter((babyName) =>
          babyName.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((babyName) => (
          <BabyName
            babyName={babyName}
            key={babyName.id}
            setFavourites={setFavourites}
          />
        ))}
      <h3>All others</h3>
      {babyNamesData
        .filter(
          (babyName) =>
            babyName.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !favourites.includes(babyName)
        )
        .sort(compareFunction)
        .map((babyName) => (
          <BabyName
            babyName={babyName}
            key={babyName.id}
            setFavourites={setFavourites}
          />
        ))}
    </div>
  );
}
