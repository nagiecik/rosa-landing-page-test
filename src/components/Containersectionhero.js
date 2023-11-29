import { useMemo } from "react";
import Header from "./Header";
import ArticleCard from "./ArticleCard";
import styles from "./Containersectionhero.module.css";

const Containersectionhero = ({
  imagelogo,
  imageappstore,
  imagegoogleplay,
  containersectionheroZIndex,
  imagelogoIconObjectFit,
  imageappstoreIconObjectFit,
  imagegoogleplayIconObjectFit,
  textlabelCursor,
  showContainerDivLinks,
  showButtonMenu,
  showButtonCta,
}) => {
  const containersectionheroStyle = useMemo(() => {
    return {
      zIndex: containersectionheroZIndex,
    };
  }, [containersectionheroZIndex]);

  const imagelogoIconStyle = useMemo(() => {
    return {
      objectFit: imagelogoIconObjectFit,
    };
  }, [imagelogoIconObjectFit]);

  const imageappstoreIconStyle = useMemo(() => {
    return {
      objectFit: imageappstoreIconObjectFit,
    };
  }, [imageappstoreIconObjectFit]);

  const imagegoogleplayIconStyle = useMemo(() => {
    return {
      objectFit: imagegoogleplayIconObjectFit,
    };
  }, [imagegoogleplayIconObjectFit]);

  const textlabelStyle = useMemo(() => {
    return {
      cursor: textlabelCursor,
    };
  }, [textlabelCursor]);

  return (
    <section
      className={styles.containersectionhero}
      style={containersectionheroStyle}
    >
      <div className={styles.containerdiv}>
        <Header
          dimensionCode="/imagelogo2.svg"
          showContainerDivLinks
          showButtonMenu={false}
          showButtonCta
          linkObjectFit="unset"
        />
        <div className={styles.containerdiv1}>
          <ArticleCard
            dimensionCode="/imageappstore2.svg"
            dimensionCodeImageUrl="/imagegoogleplay2.svg"
            propObjectFit="unset"
            propObjectFit1="unset"
            propCursor="unset"
          />
          <img
            className={styles.imageheroIcon}
            alt=""
            src="/imagehero@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Containersectionhero;
