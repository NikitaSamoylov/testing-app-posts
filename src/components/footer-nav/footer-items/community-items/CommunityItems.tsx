import { communityItems } from "../../nav-items";
import { ItemTemplate } from "../../item-template/ItemTemplate";
import styles from './CommunityItems.module.scss';

const CommunityItems: React.FC = () => {
  return (
    <ItemTemplate title={"Community"}
    items={communityItems}
    />
  )
};

export {CommunityItems};