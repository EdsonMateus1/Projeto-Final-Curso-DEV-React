import React, { useReducer } from "react";

import assignmentReducer from "./reducer";

import AssignmentContext from "./Context";

export default function ProviderAssgnment({ children }) {
  const [assgnmentState, dispatchassgnment] = useReducer(assignmentReducer, []);

  const stateAssgnment = {
    assgnmentState,
    dispatchassgnment,
  };

  return (
    <AssignmentContext.Provider value={stateAssgnment}>
      {children}
    </AssignmentContext.Provider>
  );
}
