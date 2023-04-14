 /** @format */

import React from "react";

const Form = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [file, setFile] = React.useState();
  const [localData, setLocalData] = React.useState(
    JSON.parse(localStorage.getItem("new_users")) === null
      ? []
      : JSON.parse(localStorage.getItem("new_users"))
  );


  // const add = (data) => {

  //     fetch("https://jsonplaceholder.typicode.com/posts", {
  //         method: "POST",
  //         body: JSON.stringify(data)
  //     })
  //     .then( res => res.json)
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  // add({
  //    name,
  //    surname,
  //    file
  // })

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = localData;

    data.push({
      name: name,
      surname: surname,
    });

    localStorage.setItem("new_users", JSON.stringify(data));

    // const data = {
    //   name,
    //   file,
    //   surname,
    // };

    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("suname", surname);
    // formData.append("file", file);
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: formData,
    // });
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control bg-primary mt-2 w-25">
          <label className="mt-1 text-white">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mt-1 text-white">Surname</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSurname(e.target.value)}
          />
          <label className="mt-1 text-white">File</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="btn btn-warning mt-1 w-100" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
