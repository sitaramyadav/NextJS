import Link from "next/link";

const headerStyle = {
  background: `yellow`,
  margin: 0,
  height: "100px",
  display: "flex",
  alignItems: "center"
};
const navLinkStyle = {
  padding: "10px"
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
