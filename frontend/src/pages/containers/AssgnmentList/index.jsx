import React, { useContext, useCallback, useState } from "react";
import AssgnmentContex from "../../../stateGlobal/assignment/Context";
import AssgnmentItem from "./components/AssgnmentItem";
import * as action from "../../../stateGlobal/assignment/action";
import AssgnmentModel from "./components/AssgnmentModel";
import AssgnmentFilterContex from "../../../stateGlobal/filter/Context";
import styles from "./index.module.css";

function filterAssgnment(assgnments, filter) {
  switch (filter) {
    case "all":
      return assgnments;
    case "active":
      return assgnments.filter((e) => {
        return e.completed === false;
      });
    case "completed":
      return assgnments.filter((e) => {
        return e.completed === true;
      });

    default:
      throw new Error();
  }
}

export default function AssgnmentList() {
  const { assgnmentState, dispatchassgnment } = useContext(AssgnmentContex);
  const { filterState } = useContext(AssgnmentFilterContex);
  const [curId, setcurId] = useState(null);
  const handleDelente = useCallback(
    (id) => {
      dispatchassgnment(action.deleteAssignment(id));
    },

    [dispatchassgnment]
  );

  const handleStatusUpdate = useCallback(
    (id, completed) => {
      dispatchassgnment(action.updadeAssgnment(id, completed));
    },
    [dispatchassgnment]
  );

  const handleModelOpem = useCallback(
    (id) => {
      setcurId(id);
    },
    [setcurId]
  );
  const handleModelClose = useCallback(() => {
    setcurId(null);
  }, [setcurId]);

  const handletSubmitNewTitle = useCallback(
    (id, newTtle) => {
      dispatchassgnment(action.upadadeTitle(id, newTtle));
    },
    [dispatchassgnment]
  );
  const findTitle = useCallback(
    (id) => {
      const curTitle = assgnmentState.find((element) => {
        return element.id === id;
      });
      return curTitle.title;
    },
    [assgnmentState]
  ); 
  return (
    <main className={styles.mainContainer}>
      <ul>
        {filterAssgnment(assgnmentState, filterState).map((assgnment) => {
          return (
            <AssgnmentItem
              onDelete={() => {
                handleDelente(assgnment.id);
              }}
              onOpemModel={() => {
                handleModelOpem(assgnment.id);
              }}
              onStatusUpadate={handleStatusUpdate}
              completed={assgnment.completed}
              id={assgnment.id}
              title={assgnment.title}
              key={assgnment.id}
              date={assgnment.date}
              time={assgnment.time}
            />
          );
        })}
      </ul>
      {curId && (
        <AssgnmentModel
          onModelClose={handleModelClose}
          curID={curId}
          onSubmitNewTitle={handletSubmitNewTitle}
          findTitle={findTitle}
        />
      )}
    </main>
  );
}
