import { babyNameI } from "../types/BabyNameI";

type propType = {
  babyName: babyNameI;
  setFavourites: React.Dispatch<React.SetStateAction<babyNameI[]>>;
};

const bubbleStyle = {
  backgroundColor: "#eeeeee",
  width: "5vw",
  borderRadius: 5,
  marginBottom: 5,
  fontFamily: "calibri",
  // come back and understand flex
  display: "flex",
  flex: 5,
};

const femStyle = {
  color: "teal",
};

const mascStyle = {
  color: "purple",
};

export default function BabyName(props: propType): JSX.Element {
  const styles =
    props.babyName.sex === "f"
      ? { ...bubbleStyle, ...femStyle }
      : { ...bubbleStyle, ...mascStyle };

  const handleClick = () => {
    props.setFavourites((prev) => {
      if (prev.includes(props.babyName)) {
        return prev.filter((babyName) => babyName !== props.babyName);
      } else {
        return [...prev, props.babyName];
      }
    });
  };

  return (
    <button style={styles} onClick={handleClick}>
      {props.babyName.name}
    </button>
  );
}
