import { aboutItems } from '../nav-items';
import { ItemTemplate } from 'components/FooterNav/FooterNavTemplate';

const AboutNavItem: React.FC = () => {
  return (
    <ItemTemplate title={"About"} 
      items={aboutItems}
    />
  )
};

export {AboutNavItem};