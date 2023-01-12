import styles from './mainnav.module.scss';

interface MainNavProps {
  // count: number;
  // add: () => void;
  // remove: () => void;
  active: string;
}

export const MainNav: React.FC<MainNavProps> = ({ active }) => {
  return (
    <div className={styles.mainnav}>
      <ul>
        <li>
          <img src='assets/img/nav1.svg' width='54' />
        </li>
        <li>
          <img src='assets/img/nav2.svg' width='54' />
        </li>
        <li className={active === 'archive' ? styles.active : ''}>
          <img src='assets/img/nav3.svg' width='54' />
        </li>
        <li>
          <img src='assets/img/nav4.svg' width='54' />
        </li>
        <li>
          <img src='assets/img/nav5.svg' width='54' />
        </li>
      </ul>
    </div>
  );
};
