import { communityItems } from "../nav-items";
import { ItemTemplate } from "../FooterNavTemplate/ItemTemplate";

const CommunityNavItem: React.FC = () => {
  return (
    <ItemTemplate title={"Community"}
    items={communityItems}
    />
  )
};

export {CommunityNavItem};