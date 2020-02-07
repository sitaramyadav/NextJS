import Link from "next/link";
import { gray } from "ansi-colors";

const headerStyle = {
  color: gray
};
const navLinkStyle = {
  padding: "0 10px 0 10px"
};

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={navLinkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={navLinkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
