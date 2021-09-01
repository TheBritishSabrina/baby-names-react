import { useState } from "react";
import babyNamesData from "../babyNamesData.json";
import BabyName from "./BabyName";

type babyNameType = {
  id: number;
  name: string;
  sex: string;
};

export default function BabyNamesList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function compareFunction(
    firstBabyName: babyNameType,
    secondBabyName: babyNameType
  ) {
    const firstName = firstBabyName.name;
    const secondName = secondBabyName.name;
    return firstName.localeCompare(secondName);
  }

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {babyNamesData
        .filter((babyName) =>
          babyName.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort(compareFunction)
        .map((babyName) => (
          <BabyName name={babyName.name} sex={babyName.sex} key={babyName.id} />
        ))}
    </div>
  );
}
