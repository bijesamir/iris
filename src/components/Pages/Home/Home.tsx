import styled from 'styled-components';
import { Logo } from '../../modules/Logo';
import { MainNav } from "../../modules/Mainnav";
import { ArchiveSearch } from "../../modules/ArchiveSearch";
import { Style } from './Style';


export function Home() {
  const activeNav = 'archive';

  return (
    <Style>
      <div className='site'>
        <div className='firstCol'>
          <Logo />
          <MainNav active={activeNav} />
        </div>
        <div className='secondCol'>
          <ArchiveSearch />
        </div>
        <div className='thirdCol'>
          <img src='assets/img/map.jpg' />
        </div>

        {/* <h1>Hello, world!hhhh</h1>
    <Link href={"/reset"}>reset page</Link> */}
        {/* <HomepageCounter /> */}
      </div>
    </Style>
  );
}
