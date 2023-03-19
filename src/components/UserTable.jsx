import React from "react";
import { fakeUserData } from "../api/FakeData";
import { addUser, deleteUser, removeAllUsers } from "../store/slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const UserTable = () => {
  // USING USEDISPATCH HOOK TO SEND THE DATA IN THE STORE.
  const dispatch = useDispatch();

  // USE USESELECTOR HOOK TO GET THE DATA FROM STORE.
  const data = useSelector((state) => state.users);

  // USED FOR SENDING USER DATA TO THE STORE.
  const addUserData = (payload) => {
    dispatch(addUser(payload));
  };

  // USED FOR REMOVING PARTICULAR USER DATA FROM THE STORE BY SENDING ID IN THE REDUCER.
  const removingUser = (id) => {
    dispatch(deleteUser(id));
  }

  // USED FOR DELETING ALL USER DATA FROM THE STORE.
  const deleteAll = () => {
    dispatch(removeAllUsers())
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-2">
        <h1>User Details Table</h1>
        <br />
        <div>
          <button
            className="btn btn-success btn-sm"
            onClick={() => addUserData(fakeUserData())}
          >
            {" "}
            Add New User
          </button>
          <button className="btn btn-danger btn-sm ms-2"  onClick={() => deleteAll()}>
            {" "}
            Delete All Users
          </button>
        </div>
      </div>
      <div className="mytable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">USER</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* GETTING THE DATA FROM REDUX AND SHOWING IT TO THE USER. */}
            {data.map((item, id) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{item}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => removingUser(id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
