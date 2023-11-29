import FootballRulesCard from "./FootballRulesCard";
import styles from "./Containersectiontestimonial1.module.css";

const Containersectiontestimonial = () => {
  return (
    <section className={styles.containersectiontestimonial}>
      <FootballRulesCard
        dimensionCode="/imagelogoifab2@2x.png"
        propWidth="unset"
        propAlignSelf="stretch"
      />
    </section>
  );
};

export default Containersectiontestimonial;
