import Containerheader from "./Containerheader";
import PricingCard from "./PricingCard";
import styles from "./ChooseYourContainer.module.css";

const ChooseYourContainer = () => {
  return (
    <section className={styles.containersectionpricing}>
      <Containerheader
        texth1light="Choose Your"
        texth1bold="Plan"
        textp="ROSA provides the tools to streamline rule management, create engaging content, and organize diverse sporting events with precision. Choose a plan that matches your organization's needs and make a lasting impression with a branded home screen, craft informative content effortlessly, and manage events seamlessly."
        containerheaderZIndex="unset"
        texth1lightColor="#181f4e"
        texth1lightMargin="0"
        texth1boldColor="#181f4e"
        texth1boldMargin="0"
        textpColor="#181f4e"
        textpMargin="0"
      />
      <div className={styles.containerdivcontent}>
        <PricingCard
          membershipType="National"
          discountDetails="For national sports associations in 2023, 40% off on target fee of €999/ mo from 2024, with new features still under development"
          price="€398"
          imageDimensions="/imagedivider@2x.png"
          additionalFeatures="Key Features"
          contextDescription="Primary context (rules/regulations of your sport)"
          contentDescription={`Q&As for your rules/regulations`}
          appDescription="Custom branding"
          promoMaterials="User-friendly browsing and search"
          adminCustomerService="Bookmarking (adding to favourites, note-taking)"
          imageDescription="/imagedivider@2x.png"
          dataPlanSize="5GB"
          imageDescription2="/imagedivider@2x.png"
          priceEuro="€980"
          description="/iconarrowleft1.svg"
          subscriptionType="Choose National"
          descriptionText="/iconarrowright1.svg"
          propBackgroundColor="#fff"
          propZIndex="1"
          propColor="#181f4e"
          propColor1="#7e84b5"
          propColor2="#181f4e"
          propColor3="#7e84b5"
          texth4Color="#181f4e"
          texth4Color1="#181f4e"
          texth4Color2="#181f4e"
          texth4Color3="#181f4e"
          texth4Color4="#181f4e"
          containerdivheaderColor="#181f4e"
          propColor4="#7e84b5"
          containerdivheaderColor1="#181f4e"
          containerdivheaderColor2="#181f4e"
          containerdivpricingBorder="2px solid var(--surfaces-default-surfaceprimary)"
          containerdivpricingBackgroundColor="transparent"
          texth4FontWeight="bold"
        />
        <PricingCard
          membershipType="International"
          discountDetails="For international sports organisations in 2023, 40% off on target fee of €1999/ mo from 2024, with new features still under development"
          price="€798"
          imageDimensions="/imagedivider1@2x.png"
          additionalFeatures="Everything in National, plus"
          contextDescription="User data collection"
          contentDescription="Initial content entering (up to 300 pages)"
          appDescription="Multi-language mobile app"
          promoMaterials="Starter-pack promo materials"
          adminCustomerService="Dedicated customer service for admins"
          imageDescription="/imagedivider1@2x.png"
          dataPlanSize="15GB"
          imageDescription2="/imagedivider1@2x.png"
          priceEuro="€1500"
          description="/iconarrowleft.svg"
          subscriptionType="Choose International"
          descriptionText="/iconarrowright.svg"
        />
      </div>
    </section>
  );
};

export default ChooseYourContainer;
