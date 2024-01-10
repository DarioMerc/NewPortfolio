import React, { useEffect, useRef, useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Toolbar } from "react95";

const OutsideClickDetector = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOutsideClick = () => {
    setOpen(false);
  };
  return (
    <AppBar style={{ position: "initial", width: "100%" }}>
      <Toolbar>
        <div style={{ position: "relative", display: "inline-block" }}>
          <OutsideClickDetector onOutsideClick={handleOutsideClick}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: "bold" }}
            >
              Menu
            </Button>
            {open && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  top: "100%",
                  zIndex: 9999,
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <div className="menuLink">
                    <img
                      src="src/assets/icons/Gray_briefcase.ico"
                      alt=""
                      className="menuIcon"
                    />
                    <a href="https://www.linkedin.com/in/dariomerc/">
                      LinkedIn
                    </a>
                  </div>
                </MenuListItem>

                <MenuListItem>
                  <div className="menuLink">
                    <img
                      src="src/assets/icons/Mail.ico"
                      alt=""
                      className="menuIcon"
                    />
                    <a href="mailto:dario.mercuri31@gmail.com">Email</a>
                  </div>
                </MenuListItem>
                <MenuListItem>
                  <div className="menuLink">
                    <img
                      src="src/assets/icons/Starfield.ico"
                      alt=""
                      className="menuIcon"
                    />
                    <a href="https://github.com/DarioMerc">GitHub</a>
                  </div>
                </MenuListItem>
                <MenuListItem>
                  <div className="menuLink">
                    <img
                      src="src/assets/icons/Resume.ico"
                      alt=""
                      className="menuIcon"
                    ></img>
                    <a
                      href="src/assets/resume.pdf"
                      download="Dario Mercuri CV.pdf"
                    >
                      Resume
                    </a>
                  </div>
                </MenuListItem>
              </MenuList>
            )}
          </OutsideClickDetector>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
