import React, { useState } from "react";
import Create from "./create.js";

function Users() {
  const [users, setUsers] = useState([]);
  const [isShowCreateDialog, setIsShowCreateDialog] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editingID, setEditingID] = useState(0);

  return (
    <div className="user">
      <h1>User Manager</h1>
      <div className="body p-3 mb-2">
        <div className="table mt-3 mr-3 col-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      onClick={() => {
                        setIsEdit(true);
                        setEditingUser(user);
                        setEditingID(index);
                      }}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger btn-lg"
                      onClick={() => {
                        setUsers((prev) => {
                          const clone = [...prev];
                          clone.splice(index, 1);
                          return clone;
                        });
                      }}
                    >
                      <i class="bi bi-x-lg"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            onClick={() => {
              setIsShowCreateDialog(true);
              setIsEdit(false);
            }}
          >
            Create user
          </button>
        </div>
        {isShowCreateDialog && (
          <Create
            users={users}
            setUsers={setUsers}
            isEdit={isEdit}
            editingUser={editingUser}
            editingID={editingID}
          />
        )}
      </div>
    </div>
  );
}

export default Users;
