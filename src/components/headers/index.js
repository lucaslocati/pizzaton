import Link from "next/link";

const Header = () => (
  <header>
    <Link href="/">
      <a>
        <h2>Pizzaton</h2>
      </a>
    </Link>

    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/sobre">
        <a>Sobre</a>
      </Link> 
      <Link href="/menu">
        <a>Menu</a>
      </Link>
    </nav>
  </header>
);

export default Header;
