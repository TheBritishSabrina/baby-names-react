import { reduceEachTrailingCommentRange } from "typescript";

type propType = {
  name: string;
  sex: string;
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
    props.sex === "f"
      ? { ...bubbleStyle, ...femStyle }
      : { ...bubbleStyle, ...mascStyle };

  return <div style={styles}>{props.name}</div>;
}
