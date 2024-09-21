import { aboutItems } from '../../nav-items';
import { ItemTemplate } from 'components/footer-nav/item-template';
import styles from './AboutItems.module.scss';

const AboutItems: React.FC = () => {
  return (
    <ItemTemplate title={"About"} 
      items={aboutItems}
    />
  )
};

export {AboutItems};