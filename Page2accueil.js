import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image from './image/image.png';
import './page_deux.css';
export default function pagedeux() {


  return (
    <div className="root">

      <Grid>
       <div className="premier_bloc">
         <Grid >
             <img src={image} className="img" alt="image" />
              
              <h2 className="titre_blocun">Team building - Cooking Party Challenge</h2>
              <div className="text_blocpremier">
              <p>Transformez votre équipe en une véritable brigade de cuisinier et plongez vous dans l'atmosphère d'un véritable restaurant !</p>
               <p> Vous devrez imaginer et concevoir votre repas à partir d'un panier d'ingrédients surprise, le tout sans recette !</p>
                <p>Des équipes sont constituées, chacune d'elle aura la responsabilité de créer une entrée, un plat ou un dessert.</p>
               <p> La première phase de l'animation Cooking Party Challenge est dédiée à la réflexion : écriture des recettes, répartition des tâches, organisation du dressage, décoration des assiettes...</p>
               <p> Après la validation de l'un de nos chefs de cuisine professionnel, place à la réalisation !</p>
               <p>   Nos chefs animateurs encadrent et accompagnent les marmitons, en veillant à la bonne humeur et la convivialité!</p>
              <p>Vous profitez ensuite tous ensemble du fruit de votre travail autour d'un bon repas. </p>
                <p>Prêt pour le Cooking Party Challenge ?</p>
              </div>
            
          </Grid>
       </div>
       <div className="blocun_agauche">
          <Grid >
          <button className='bouton_gratuit'>
             Gratuit
          </button>
          <button className='bouton_reserver'>
             Réserver
          </button>
          </Grid>
        </div>
        <div className="blocdeux_agauche">
          <Grid >
            <div className="text_blocdeuxieme">
               <h3>Politique d’annulation et de remboursement</h3>
          <p>Les annulations et remboursements peuvent s’effectuer jusqu’à la date de clôture des inscriptions soit jusqu’au <strong>2 janvier 2021.</strong></p>
            </div>
           
          </Grid>
        </div>
       
        <h1 className="titre_deux">Liste des participants</h1>
        <div className="deuxieme_bloc">
        <Grid>
        
        <p>Participant</p>
          
        </Grid>
        </div>
       
       
      </Grid>
    </div>
  );
}
