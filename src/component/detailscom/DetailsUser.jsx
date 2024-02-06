import React, { useState } from "react";
import "./DetailsUser.scss";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux_Component/Slicers/UserSlice";
import AddUser from "../AddUser/AddUser";
import DeleteUser from "../deleteUser/DeleteUser";

// import add image
import addImg from "../../images/add_2921226.png";

const DetailsUser = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  console.log(value);
  return (
    <>
      <section>
        <h2 style={{ textShadow: "2px 4px 4px rgba(46,91,173,0.6)" }}>
          Welcom To My <span style={{ color: "red" }}>Admin Table</span>
        </h2>
        <main className={isFocused ? "expanded" : ""}>
          <div className="box">
            <div>
              <input
                type="text"
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => {
                  setValue(e?.target?.value);
                }}
              />
            </div>
            <div className="btn">
              {value !== "" && (
                <button
                  onClick={() => {
                    dispatch(addUser(value));
                    return setValue("");
                  }}
                >
                  <img src={addImg} alt="Add user" width="40px" />
                </button>
              )}
            </div>
          </div>
          <ul>
            <AddUser />
          </ul>
        </main>
        <DeleteUser />
      </section>
    </>
  );
};

export default DetailsUser;
