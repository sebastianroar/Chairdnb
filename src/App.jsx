import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import * as services from "./services/services";

export default function App() {
  const [dataAll, setDataAll] = useState([]);
  const [searchAccommodation, setSearchAccommodation] = useState("");
  const [valueInput, setValueInput] = useState([]);

  function handleSearch(data) {
    setSearchAccommodation(data);
  }

  function handleValueInput(title) {
    setValueInput(title);
  }

  async function getAll() {
    try {
      const data = await services.getAll();
      setDataAll(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      {searchAccommodation.length > 0 ? (
        <SearchPage
          title={valueInput}
          onHandleValueInput={handleValueInput}
          onHandleSearch={handleSearch}
          data={searchAccommodation}
        />
      ) : (
        <HomePage
          onHandleSearch={handleSearch}
          onHandleValueInput={handleValueInput}
          data={dataAll}
          error={valueInput}
        ></HomePage>
      )}
    </div>
  );
}
