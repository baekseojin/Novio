import React, { createContext, useContext, useState } from "react";

const RecordContext = createContext();

export function useRecord() {
  return useContext(RecordContext);
}

export function RecordProvider({ children }) {
  const [record, setRecord] = useState({
    observation: "",
    feeling: "",
    need: "",
    request: "",
  });

  const updateRecord = (fieldName, value) => {
    setRecord((prevRecord) => {
      const updatedRecord = { ...prevRecord, [fieldName]: value };
      console.log("Updated Record:", updatedRecord);
      return updatedRecord;
    });
  };

  const resetRecord = () => {
    setRecord({
      observation: "",
      feeling: "",
      need: "",
      request: "",
    });
  };

  return (
    <RecordContext.Provider value={{ record, updateRecord, resetRecord }}>
      {children}
    </RecordContext.Provider>
  );
}
