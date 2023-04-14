/** @format */

import React from "react";


const handleClick = () => {
    document.addEventListener("mousedown", (event) => {
        if(test.current && !test.current.contains(event.target)) {
            test.current.classList.toggle('active')
        }else {
            if(test.current && !test.current.contains(event.target)){
                test.current.classList.remove('active')

                console.log(test.current)
            }
        }
    })
  }

const Icons = () => {
  const [tag, setTag] = React.useState(false);
  const changeTag = React.useRef();
  const test = React.useRef()


  
  React.useEffect(() => {
    // console.log(changeTag)
    document.addEventListener("mousedown", (event) => {
      if (changeTag.current && !changeTag.current.contains(event.target)) {
        setTag(false);
        console.log(changeTag);
      }
    });
  }, [changeTag]);











//   React.useEffect(() => {
//     document.addEventListener("mousedown", (event) => {
//         if(changeTag.current && !changeTag.current.contains(event.target)) {
//             test.current.classList.toggle('active')
//         }
//     })
//   }, [test])



 

  return (
    <div>
      <button className="btn btn-danger mx-5" onClick={(e) => setTag(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bank"
          viewBox="0 0 16 16">
          <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
        </svg>
      </button>
      {tag && (
        <div className="mx-5" ref={changeTag} style={{ background: "yellow" }}>
          <ul>
            <li>Dollar</li>
            <li>Manat</li>
            <li>Euro</li>
            <li>Sterlinq</li>
          </ul>
        </div>
      )}

      <div className="mt-5">
        <button className="btn btn-success mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar2"
            viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
          </svg>
        </button>
        <div className="mx-5 mt-2 aylar" ref={test}>
            <ul className="ul_aylar">
                <li>
                    Yanvar
                </li>
                <li>
                    Fevral
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Icons;
