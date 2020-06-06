import React, { useContext, useState, useCallback, useEffect } from "react";
import FilterContext from "../../../stateGlobal/filter/Context";
import * as actionFilter from "../../../stateGlobal/filter/action";
import styles from "./index.module.css";
import AssgnmenSelect from "./components/AssgnmentSelect";

export default function AssgnmentFilter() {
  const { filterState, dispatchToFilter } = useContext(FilterContext);
  const [stateSelect, setSelect] = useState(filterState);
  const handleSelect = useCallback(
    (e) => {
      setSelect(e.target.value);
    },
    [setSelect]
  );

  const filterUpdade = useCallback(
    (filterState) => {
      dispatchToFilter(actionFilter.toggleFilter(filterState));
    },
    [dispatchToFilter]
  );

  useEffect(() => {
    filterUpdade(stateSelect);
  }, [stateSelect, filterUpdade]);

  return (
    <footer className={styles.containerFilter}>
      <AssgnmenSelect
        value={stateSelect}
        onSelectChange={handleSelect}
        options={[
          { value: "all", title: "Todas as tarefas" },
          { value: "active", title: "Tarefas a se realizar" },
          { value: "completed", title: "Tarefas completas" },
        ]}
      />
    </footer>
  );
}
