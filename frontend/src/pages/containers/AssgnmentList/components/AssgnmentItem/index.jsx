import React, { useState, useCallback, useEffect } from "react";
import styles from "./index.module.css";
import { FiPenTool, FiTrash2 } from "react-icons/fi";

export default function AssgnmentItem({
  title,
  onDelete,
  completed,
  onStatusUpadate,
  id,
  onOpemModel,
  date,
  time,
}) {
  const [CheckState, setChecked] = useState(completed);
  const handletChange = useCallback((e) => {
    setChecked(e.target.checked);
  }, []);

  useEffect(() => {
    onStatusUpadate(id, CheckState);
  }, [CheckState, onStatusUpadate, id]);

  return (
    <li
      key={id}
      className={CheckState ? styles.itemContainerCheck : styles.itemContainer}
    >
      <span className={CheckState ? styles.completed : ""}>{title}</span>
      <span className={CheckState ? styles.completed : ""}>{date}</span>
      <span className={CheckState ? styles.completed : ""}>{time}</span>
      <div className={styles.buttonContainer}>
        <button onClick={onOpemModel}>
          <FiPenTool size={15} />
        </button>
        <input type="checkbox" checked={CheckState} onChange={handletChange} />
        <button onClick={onDelete}>
          <FiTrash2 size={15} />
        </button>
      </div>
    </li>
  );
}
