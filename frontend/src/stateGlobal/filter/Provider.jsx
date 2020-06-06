import React, { useReducer } from "react";

import FilterContext from "./Context";
import filerReducer from "./reducer";

export default function ProviderFilter({ children }) {
  const [filterState, dispatchToFilter] = useReducer(filerReducer, "all");
  const stateFilter = {
    filterState,
    dispatchToFilter,
  };
  return (
    <FilterContext.Provider value={stateFilter}>
      {children}
    </FilterContext.Provider>
  );
}
