import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Conditional Rendering
        </Link>
        <ul>
          <CustomLink to="/example1">Example1</CustomLink>
          <CustomLink to="/example2">Example2</CustomLink>
          <CustomLink to="/example3">Example3</CustomLink>
          <CustomLink to="/example4">Example4</CustomLink>
        </ul>
      </nav>
    )
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }