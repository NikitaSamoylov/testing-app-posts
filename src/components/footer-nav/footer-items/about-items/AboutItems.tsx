import { aboutItems } from '../../nav-items';
import { ItemTemplate } from 'components/footer-nav/item-template';

const AboutItems: React.FC = () => {
  return (
    <ItemTemplate title={"About"} 
      items={aboutItems}
    />
  )
};

export {AboutItems};