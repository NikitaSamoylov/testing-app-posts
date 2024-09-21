import { ItemTemplate } from "../../item-template/ItemTemplate";
import { socialsItems } from "../../nav-items";
import styles from './SocialItems.module.scss';

const SocialItems: React.FC = () => {
  return (
    <div className={styles.socials}>
      <ItemTemplate title={"Socials"}
        items={socialsItems}
      />
    </div>
  )
};

export {SocialItems};