import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { setTheme } from "../../redux/actions";

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const [state, setState] = useState({
    isOn: theme && theme === "dark",
  });

  const flipSwitch = () => {
    if (!localStorage.getItem("theme")) {
      if (theme === "light") {
        dispatch(setTheme("dark"));
        localStorage.setItem("theme", "dark");
      } else {
        dispatch(setTheme("light"));
        localStorage.setItem("theme", "light");
      }
      setState({
        isOn: !state.isOn,
      });
    }

    if (localStorage.getItem("theme")) {
      if (theme === "light") {
        dispatch(setTheme("dark"));
        localStorage.setItem("theme", "dark");
      } else {
        dispatch(setTheme("light"));
        localStorage.setItem("theme", "light");
      }
      setState({
        isOn: !state.isOn,
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        setState({
          isOn: true,
        });
      }
      dispatch(setTheme(localStorage.getItem("theme")));
    }
  }, []);

  return (
    <li
    onClick={flipSwitch}
      title="modifier le thème"
      className="ml-md-auto nav-item mr-2 mt-3 mt-md-0 d-flex align-items-center"
      style={{ cursor: "pointer" }}
    >
      <div>
        <motion.div
          style={{
            height: "20px",
            width: "40px",
            borderRadius: "25px",
          }}
          center
          variants={{
            off: { background: "#ffffff", border: "1px solid #BBBBBB" },
            on: { background: "#0070DF" },
          }}
          initial={state.isOn ? "on" : "off"}
          animate={state.isOn ? "on" : "off"}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="d-flex align-items-center"
        >
          <motion.div
            style={{
              height: "23px",
              width: "23px",
              borderRadius: "100%",
              marginBottom:"2px",
              backgroundColor: theme === "dark" ? "#00488e" : "#343a40",
            }}
            variants={{
              off: { x: -5 },
              on: { x: 20 },
            }}
            transition={{
              type: "tween",
              duration: 0.1,
            }}
          />
        </motion.div>
      </div>
      <div className="ml-3">{theme === "dark" ? "Dark" : "Light"}</div>
    </li>
  );
};

export default ThemeButton;
