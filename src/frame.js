import React from "react";
import styles from "./common/frame-styles.js";

export default function Frame({ children }) {
  return <div style={styles.root}>{children}</div>;
}
