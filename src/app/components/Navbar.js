'use client'
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavbarContainerDesktopWrapper = styled.nav`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: flex-start;
    display: none;
  }
`;

const NavbarContainerDesktop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  column-gap: 20px;

  @media (max-width: 768px) {
    align-items: flex-start;
    display: none;
  }
`;

const NavbarContainerMobile = styled.nav`
  display: none;
  align-items: center;
  padding: 10px 20px;

  @media (max-width: 768px) {
    align-items: flex-start;
    display:block
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  flex-grow: 2;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.open ? 'flex' : 'none')};
    margin-top: 10%;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
`;


const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  width: 200px;
`;

const MenuMobileHeader = styled.div`
  display:flex;
  justify-content: space-between;

`;
const LogoContainer = styled.div`
  display:flex; 
`;
const IconsContainer = styled.div`
  display:flex; 
  column-gap: 10px;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <NavbarContainerDesktopWrapper>
        <NavbarContainerDesktop>
          <Logo>AEON</Logo>
          <Menu open={menuOpen}>
            <Link href="/calculator">Showcase</Link>
            <Link href="/">Docs</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Analytics</Link>
            <Link href="/">Commerce</Link>
            <Link href="/">Templates</Link>
            <Link href="/">Enterprise</Link>
          </Menu>
          <SearchInputContainer open={searchOpen}>
            <SearchInput type="text" placeholder="Search..." />
          </SearchInputContainer>
        </NavbarContainerDesktop>
        <hr color="#E6E6E6"/>
      </NavbarContainerDesktopWrapper>
      <NavbarContainerMobile>
        <MenuMobileHeader>
          <LogoContainer>
            <Logo>AEON</Logo>
          </LogoContainer>
          <IconsContainer>
            <SearchIcon onClick={toggleSearch}>
              🔍
            </SearchIcon>
            <Hamburger onClick={toggleMenu}>
              <Bar />
              <Bar />
              <Bar />
            </Hamburger>
          </IconsContainer>
        </MenuMobileHeader>
        <Menu open={menuOpen}>
          <Link href="/calculator">Showcase</Link>
          <Link href="/">Docs</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Analytics</Link>
          <Link href="/">Commerce</Link>
          <Link href="/">Templates</Link>
          <Link href="/">Enterprise</Link>
        </Menu>

      </NavbarContainerMobile>
    </>
  );
};

export default Navbar;
