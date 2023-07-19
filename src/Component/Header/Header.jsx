import HeaderNav from "./HeaderNav";

const Header = ({ header }) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">

            <ul className="navbar-nav gap-4">
              
              {header && header.map((elem) => {
                return (
                  <HeaderNav nav={elem} key={elem.id} />
                )
              })}

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;