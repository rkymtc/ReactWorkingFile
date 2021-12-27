import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [btnCheck, setBtnCheck] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        <button
          className="btn"
          onClick={() => {
            setBtnCheck(!btnCheck);
          }}
        >
          {btnCheck ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{btnCheck ? info : ""}</p>
    </article>
  );
};

export default Question;
