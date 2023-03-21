import { useState } from "react";
import styledSearchForm from "./searchform.module.css";

export default function SearchForm({
  onHandleSearch,
  onHandleValueInput,
  data,
  error,
}) {
  const [where, setWhere] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [developers, setDevelopers] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!where && !arrival && !departure && !developers) {
      onHandleSearch([]);
      return;
    }

    function dateCheck(startDate, endDate, from, to) {
      const arrival = new Date(from);
      const departure = new Date(to);
      const checkStartDate = new Date(startDate);
      const checkEndDate = new Date(endDate);

      if (checkStartDate >= arrival && checkEndDate <= departure) {
        return true;
      } else {
        return false;
      }
    }

    const hasWhere =
      where.length >= 1
        ? data.filter(
            (place) =>
              place.country.toUpperCase().includes(where.toUpperCase()) ||
              place.name.toUpperCase().includes(where.toUpperCase())
          )
        : data;

    const hasArrival =
      arrival.length >= 1 && departure.length >= 1
        ? hasWhere.filter((place) =>
            dateCheck(place.start_date, place.end_date, arrival, departure)
          )
        : hasWhere;

    onHandleValueInput(
      hasArrival.length > 0 ? where.toUpperCase() : "NOT FOUND"
    );

    onHandleSearch(hasArrival);
  }

  return (
    <div className={styledSearchForm.container}>
      <h1 className={styledSearchForm.title}>
        Book unique accommodations to code as never before
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={styledSearchForm.inputGroup}>
          <label className={styledSearchForm.label} htmlFor="where">
            Where
          </label>
          <input
            className={styledSearchForm.input}
            onChange={(e) => setWhere(e.target.value)}
            type="text"
            name="where"
            id="where"
            placeholder="Everywhere"
          />
        </div>

        <div className={styledSearchForm.inputGroup2}>
          <div className={styledSearchForm.flexColumn}>
            <label className={styledSearchForm.label} htmlFor="arrival">
              Arrival
            </label>
            <input
              className={styledSearchForm.input2}
              onChange={(e) => setArrival(e.target.value)}
              type="date"
              name="arrival"
              id="arrival"
            />
          </div>
          <div className={styledSearchForm.flexColumn}>
            <label className={styledSearchForm.label} htmlFor="departure">
              Departure
            </label>
            <input
              className={styledSearchForm.input2}
              onChange={(e) => setDeparture(e.target.value)}
              type="date"
              name="departure"
              id="departure"
            />
          </div>
        </div>

        <div className={styledSearchForm.inputGroup}>
          <label className={styledSearchForm.label} htmlFor="developers">
            Developers
          </label>
          <input
            className={styledSearchForm.input}
            onChange={(e) => setDevelopers(e.target.value)}
            type="number"
            name="developers"
            id="developers"
            placeholder="1"
          />
        </div>
        <button className={styledSearchForm.searchButton} type="submit">
          Search
        </button>
        <h3 className={styledSearchForm.error}>{error}</h3>
      </form>
    </div>
  );
}
