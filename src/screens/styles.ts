import { CSSProperties } from "react";

const padding = 5;

const paddingVertical: CSSProperties = {
  paddingTop: padding,
  paddingBottom: padding,
};

const BODY: CSSProperties = {
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  justifyItems: "center",
  alignContent: "center",
  paddingBottom: 200,
};
const CONTAINER: CSSProperties = {
  display: "flex",
  alignSelf: "center",
  flexDirection: "column",
  backgroundColor: "#f7f8fe",
  marginTop: 30,
  borderRadius: 15,
  boxShadow: "2px 2px #ccc",
  borderWidth: 1,
};

const TEXT_SUMMARY: CSSProperties = {
  width: "99%",
  fontSize: 16,
  fontWeight: "normal",
  minHeight: 100,
  textAlign: "justify",
  ...paddingVertical,
};

const TEXT_TITLE: CSSProperties = {
  maxWidth: "99%",
  paddingTop: 5,
  paddingBottom: 5,
  fontSize: 20,
  fontWeight: "bold",
};

export { CONTAINER, TEXT_SUMMARY, TEXT_TITLE, paddingVertical, BODY };
