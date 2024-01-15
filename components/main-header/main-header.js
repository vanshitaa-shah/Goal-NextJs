import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import Styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={Styles.header}>
        <Link href="/" className={Styles.logo}>
          <Image src={LogoImg} alt="App Logo: A plate with food on it" />
          NextLevel Food
        </Link>

        <nav className={Styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
