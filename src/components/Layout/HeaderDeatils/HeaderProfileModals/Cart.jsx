import React, { useContext } from "react";
import { contextapp } from "../../../../contexts/ContextProv";
import { webapp } from "./data";

import { BsBag } from "react-icons/bs";
import Warning from "../../../../utils/Warning";
function Cart({ index }) {
  const { showmodal, showModalHandler } = useContext(contextapp);
  return (
    <>
      <div
        className={`iconHeadaer position-relative mt-2   p-2 px-1 rounded-circle ${
          showmodal === index ? "activem " : "unactivem"
        } `}
      >
        <div
          className={`iconContainer   `}
          onClick={() => showModalHandler(index === showmodal ? false : index)}
        >
          <span>
            <BsBag size={20} />
            <Warning bg="rgba(41,156,219)" number={5} />
          </span>
        </div>
      </div>
      <div
        className={` w-100 containerApps containerModal position-absolute  shadow-sm d-flex flex-wrap justify-content-around p-1 `}
      >
        {webapp.map((app, index) => (
          <div
            onClick={() => {
              showModalHandler(false);
            }}
            key={index}
            className={` w-25 curoser d-flex flex-column align-items-center justify-content-between  m-1 flagName p-1 px-2    rounded`}
          >
            <div>
              <img height="24px" src={app.src} alt={app.title} />
            </div>
            <div>
              <p className="mt-1" style={{ fontSize: "14px" }}>
                {app.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
