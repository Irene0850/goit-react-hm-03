import React, {} from "react";
import "./App.css";

const getStoreContacts = () => {
  const StoredContacts = localStorage.getItem("contacts");
  return StoredContacts ? JSON.parse(StoredContacts) : intialContacts;
};

const App () {
  const [contacts, ]
};

export default App;
