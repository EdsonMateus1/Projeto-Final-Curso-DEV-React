import React from "react";
import styles from "./index.module.css";
export default function AssgnmenSelect({ value, onSelectChange, options }) {
  return (
    <select
      className={styles.containerSelect}
      value={value}
      onChange={onSelectChange}
    >
      {options.map((element) => {
        return (
          <option key={element.value} value={element.value}>
            {element.title}
          </option>
        );
      })}
    </select>
  );
}
