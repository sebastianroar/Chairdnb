import Accommodation from "../components/Accommodation/Accommodation";
import Adventures from "../components/Adventures/Adventures";
import Experiences from "../components/Experiences/Experiences";
import Explorer from "../components/Explorer/Explorer";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";
import PlusAccommodation from "../components/PlusAccommodation/PlusAccommodation";
import SearchForm from "../components/SearchForm/SearchForm";

export default function HomePage({
  onHandleSearch,
  onHandleValueInput,
  data,
  error,
}) {
  return (
    <div>
      <Hero>
        <SearchForm
          onHandleSearch={onHandleSearch}
          onHandleValueInput={onHandleValueInput}
          data={data}
          error={error}
        />
      </Hero>
      <Explorer />
      <PlusAccommodation />
      <Adventures />
      <Accommodation />
      <Experiences />
      <Featured />
    </div>
  );
}
