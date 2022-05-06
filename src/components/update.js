import logo from '../logo.svg';
import './style.css';

function updatePage() {
  return (
    <div className="App mt-3 col-6">
      <form>
        <div class="form-group" style={{display: 'flex', position: "relative"}}>
          <label for="exampleInputEmail1">Name</label>
          <input style={{"width" : "500px", position: "absolute", right: "0"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div class="form-group" style={{display: 'flex', position: "relative"}}>
          <label for="exampleInputPassword1">Age</label>
          <input style={{"width" : "500px", position: "absolute", right: "0"}} type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="form-group" style={{display: 'flex', position: "relative"}}>
          <label for="exampleInputPassword1">Address</label>
          <input style={{"width" : "500px", position: "absolute", right: "0"}} type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="form-group" style={{display: 'flex', position: "relative"}}>
          <label for="exampleInputPassword1">Phones</label>
          <input style={{"width" : "500px", position: "absolute", right: "0"}} type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        <button type="submit" class="btn btn-primary">Update User</button>
      </form>
    </div>
  );
}

export default updatePage;
