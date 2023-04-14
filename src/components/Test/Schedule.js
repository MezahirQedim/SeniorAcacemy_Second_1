/** @format */

import React from "react";
import { useContext } from "react";
import { useTheme, useLang } from "../../context";

export const Schedule = () => {
  const data = useTheme();
  const lang = useLang();

  const [value, setValue] = React.useState("");
  const valueRef = React.useRef()


  React.useEffect(() => {
    valueRef.current.focus()
  },[])

  return (
    <div
      className="p-5"
      style={{ backgroundColor: data.theme, height: "400px" }}>
      <button
        className="btn btn-danger"
        onClick={() => {
          data.setTheme(data.theme === "violet" ? "blue" : "violet");
        }}>
        {lang.change.change} {lang.change.theme}
      </button>
      <button
        className="btn btn-warning mx-1"
        onClick={() => lang.setChange(lang.en)}>
        en
      </button>
      <button
        className="btn btn-info mx-1"
        onClick={() => lang.setChange(lang.az)}>
        az
      </button>

      <input
        className="form-control w-25"
        onChange={(e) => setValue(e.target.value)}
        ref={valueRef}
      />

      <div className="text-white fw-bold">state ile === {value}</div>
      {/* <div className="text-white fw-bold">Use ref ile === {valueRef.current}</div> */}
    </div>
  );
};
