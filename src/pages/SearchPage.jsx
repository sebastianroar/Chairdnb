import Hero from "../components/Hero/Hero";
import Cards from "../utils/Card";
import styledSearch from "./searchpage.module.css";

export default function SearchPage({
  onHandleSearch,
  onHandleValueInput,
  data,
  title,
}) {
  const setSearch = () => {
    onHandleSearch([]);
    onHandleValueInput("");
  };

  return (
    <div>
      <Hero>
        <button className={styledSearch.backButton} onClick={setSearch}>
          BACK
        </button>
        <div className={styledSearch.titleResults}>
          SEARCH RESULTS FOR {title}
        </div>
      </Hero>
      <div className={styledSearch.container}>
        {data?.map(({ id, ...Adventure }) => (
          <Cards key={id} {...Adventure} />
        ))}
      </div>
    </div>
  );
}
