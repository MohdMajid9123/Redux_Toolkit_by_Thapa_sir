import React from "react";
import "./AddUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneUser } from "../../Redux_Component/Slicers/UserSlice";
import deleteOne from "../../images/tag_6632497.png";
const AddUser = () => {
  let getData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {getData.map((item, id) => (
          <li key={id} className="addUser">
            {item}
            <button
              onClick={() => {
                dispatch(deleteOneUser(id));
              }}
            >
              <img src={deleteOne} alt="Add user" width="40px" />
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default AddUser;
