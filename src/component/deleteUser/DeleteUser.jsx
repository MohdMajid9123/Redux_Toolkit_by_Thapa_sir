import React from "react";
import "./DeleteUser.scss";
import { useDispatch } from "react-redux";
import { deleteAllUser } from "../../Redux_Component/Slicers/UserSlice";
import DeleteImag from "../../images/collection_9536608.png";

const DeleteUser = () => {
  const dispatch = useDispatch();
  return (
    <div className="btn">
      <button
        onClick={() => {
          dispatch(deleteAllUser());
        }}
      >
        <img src={DeleteImag} alt="Add user" width="40px" />
      </button>
    </div>
  );
};

export default DeleteUser;
