import Header from "./Header";
import styles, { button, body } from "./styles";

const layoutStyle = {
  margin: 0,
  padding: 0,
  border: "1px solid #DDD"
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
    <button>styled-jsx</button>
    <style jsx>{styles}</style>
    <style jsx>{button}</style>
    <style jsx global>
      {body}
    </style>
  </div>
);

export default Layout;
