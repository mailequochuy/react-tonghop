import React from 'react';
import logo from '../logo.svg';
import Create from './create.js';
import Update from './update.js';

function Users() {
  return (
    <div className="user">
      <h1>User Manager</h1>
      <div className="body p-3 mb-2">
        <div className='table mt-3 mr-3 col-6'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Adress</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-lg"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger btn-lg"><i class="bi bi-x-lg"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary btn-lg">Create user</button>
        </div>
        <Create />
      </div>
    </div>
  );
}

export default Users;
