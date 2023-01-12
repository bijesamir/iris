import styled from 'styled-components';
import { Logo } from '../../logo/Logo';
import { MainNav } from '../../mainnav/MainNav';
import { ArchiveSearch } from '../ArchiveSearch/archiveSearch';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
`;

export function Home() {
  const activeNav = 'archive';

  return (
    <Container>
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
    </Container>
  );
}
