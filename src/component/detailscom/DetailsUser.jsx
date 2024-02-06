import React from "react";
import "./DetailsUser.scss";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux_Component/Slicers/UserSlice";
import Chances from "../../Chance/Chances";
import AddUser from "../AddUser/AddUser";
import DeleteUser from "../deleteUser/DeleteUser";

// import add image
import addImg from "../../images/user_194819.png";
import arrowImage from "../../images/right-arrow_13069952.png";

const DetailsUser = () => {
  const dispatch = useDispatch();
  return (
    <>
      <section>
        <h2 style={{ textShadow: "2px 4px 4px rgba(46,91,173,0.6)" }}>
          Welcom To My <span style={{ color: "orange" }}>Admin Table</span>
        </h2>
        <main>
          <div className="box">
            <div className="heading">
              <h2 id="rightArrow">
                Add New User Data
                <img id="rightArrow" src={arrowImage} alt="" width="40px" />
              </h2>
            </div>
            <div className="btn">
              <button
                onClick={() => {
                  dispatch(addUser(Chances()));
                }}
              >
                <img src={addImg} alt="Add user" width="40px" />
              </button>
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
