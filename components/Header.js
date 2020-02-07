import Link from "next/link";

const headerStyle = {
  background: `#03a9f4`,
  margin: 0,
  height: "100px",
  display: "flex",
  alignItems: "center"
};
const navLinkStyle = {
  padding: "10px",
  fontSize: "30px"
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
