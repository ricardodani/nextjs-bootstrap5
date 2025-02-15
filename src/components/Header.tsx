import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
      <h1 className="h4">
        <Link
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span>React</span>
        </Link>
      </h1>
      <a
        href="https://github.com/twbs/examples/tree/main/react-nextjs/"
        target="_blank"
        rel="noopener"
      >
        Link 1
      </a>
    </header>
  );
};

export default Header;
