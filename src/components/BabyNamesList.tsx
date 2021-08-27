import babyNamesData from "../babyNamesData.json";
import BabyName from "./BabyName";

type babyNameType = {
  id: number;
  name: string;
  sex: string;
};

export default function BabyNamesList(): JSX.Element {
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
      {babyNamesData.sort(compareFunction).map((babyName) => (
        <BabyName name={babyName.name} sex={babyName.sex} key={babyName.id} />
      ))}
    </div>
  );
}
