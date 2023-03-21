import styledHero from "./hero.module.css";

export default function Hero({ children }) {
  return (
    <div className={styledHero.hero}>
      <h1 className={styledHero.title}>@chairdnb</h1>
      <div className={styledHero.children}>{children}</div>
    </div>
  );
}
