import React from "react";
import { Link } from "react-router-dom";
import { useTheme, useLang } from "../context";

const Navbar = () => {
  const data = useTheme();
  const lang = useLang();

  const [tooltip, setTooltip] = React.useState(false);
  const [tool_2, setTool_2] = React.useState(false)
  const refTooltip = React.useRef();
  const refTool2 = React.useRef()

  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (refTooltip.current && !refTooltip.current.contains(event.target)) {
        setTooltip(false);
      }
    });
  }, [refTooltip]);

  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (refTool2.current && !refTool2.current.contains(event.target)) {
        setTool_2(false);
      }
    });
  }, [refTool2]);

  return (
    <div>
      {/* <div style={{backgroundColor: data.theme}}>
        ssdknasdjsa
      </div> */}
      <nav
        className="navbar navbar-expand-lg  bg-body-tertiary"
        style={{ backgroundColor: data.theme }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SeniorAZ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  {lang.change.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link" href="#">
                  {lang.change.service}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  {" "}
                  {lang.change.users}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/form" className="nav-link">
                  {lang.change.form}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/icons" className="nav-link">
                  Icons
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-dark mx-2"
                onClick={(e) => {
                  e.preventDefault();
                  setTooltip(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-airplane"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                </svg>
              </button>
              <button className="btn btn-dark mx-2"
              type="button"
                onClick={() => {
                  setTool_2(!tool_2)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-binoculars"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                </svg>
              </button>

              <input
                className="form-control me-2"
                type="search"
                placeholder={lang.change.search}
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                {lang.change.search}
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className={`test ${tooltip ? "active" : ""}`} ref={refTooltip}>
        <ul className="mt-1">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div className={`tooltip_2 ${tool_2 ? "active" : ""}`} ref={refTool2}>
        <ul className="mt-2">
          <li>
            Item 1
          </li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
