import {Style} from "./Style"
import {img} from "../../../assets/img";
interface MainNavProps {
  active: string;
}

export const MainNav: React.FC<MainNavProps> = ({ active }) => {
  return (
    <Style>
    
      <ul>
        <li className={active === 'tasking-search' ? 'active' : ''}>
          <img src={img.nav1} width='54' />
        </li>
        <li>
          <img src={img.nav2} width='54' />
        </li>
        <li className={active === 'archive' ? 'active' : ''}>
          <img src={img.nav3} width='54' />
        </li>
        <li>
          <img src={img.nav4} width='54' />
        </li>
        <li>
          <img src={img.nav5} width='54' />
        </li>
      </ul>
    </Style>
  );
};
