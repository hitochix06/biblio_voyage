
function Inscrire() {
 return (
  <div className="container">
   <form className="row g-3 mt-3">
    <div className="col-md-6">
     <label for="inputEmail4" className="form-label">Email</label>
     <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
     <label for="inputPassword4" className="form-label">Password</label>
     <input type="password" className="form-control" id="inputPassword4" />
    </div>
    <div className="col-12">
     <label for="inputAddress" className="form-label">Address</label>
     <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
    </div>

    <div className="col-12">
     <button type="submit" className="btn btn-primary">S'inscrire</button>
    </div>
   </form>

  </div>

 );
};






export default Inscrire;