import Header from "./Header";
import styles, { button, body } from "./styles";

const layoutStyle = {
  margin: 0,
  padding: 0
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
    <style jsx>{styles}</style>
    <style jsx>{button}</style>
    <style jsx global>
      {body}
    </style>
  </div>
);

export default Layout;
