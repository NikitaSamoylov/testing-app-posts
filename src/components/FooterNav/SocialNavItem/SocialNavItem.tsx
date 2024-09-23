import { ItemTemplate } from "../FooterNavTemplate/ItemTemplate";
import { socialsItems } from "../nav-items";
import styles from './SocialNavItem.module.scss';

const SocialNavItem: React.FC = () => {
  return (
    <div className={styles.socials}>
      <ItemTemplate title={"Socials"}
        items={socialsItems}
      />
    </div>
  )
};

export {SocialNavItem};