

function Connexion() {
 return (
  <div className="container">

   <form>
    <div class="form-outline mb-4 mt-5">
     <input type="email" id="form2Example1" class="form-control" />
     <label class="form-label" for="form2Example1">Adresse e-mail</label>
    </div>

    <div class="form-outline mb-4">
     <input type="password" id="form2Example2" class="form-control" />
     <label class="form-label" for="form2Example2">mot de passe</label>
    </div>


    <div class="row mb-4">

     <div class="col">

      <a href="#!">Mot de passe oublié?</a>
     </div>
    </div>

    <button type="button" class="btn btn-primary btn-block mb-4">Connexion</button>

    <div class="text-center">
     <p>n'êtes pas membre? <a href="#!">S'inscrire</a></p>


    </div>
   </form>
  </div>

 );
};






export default Connexion;