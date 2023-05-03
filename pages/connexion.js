import Link from 'next/link';
import styles from '../styles/connexion.module.scss';






function Connexion() {
 return (
  <div className="container">
   <form>
    <div className="form-outline mb-4 mt-5">
     <input type="email" id="form2Example1" className="form-control" />
     <label className="form-label" for="form2Example1">Adresse e-mail</label>
    </div>

    <div className="form-outline mb-4">
     <input type="password" id="form2Example2" className="form-control" />
     <label className="form-label" for="form2Example2">mot de passe</label>
    </div>


    <div className="row mb-4">

     <div className="col">

      <a href="#!">Mot de passe oublié?</a>
     </div>
    </div>

    <button type="button" className="btn btn-primary btn-block mb-4">Connexion</button>

    <div className="text-center">
     <p>n'êtes pas membre? <Link href="inscrire">S'inscrire</Link></p>
    </div>
   </form>
  </div>

 );
};






export default Connexion;