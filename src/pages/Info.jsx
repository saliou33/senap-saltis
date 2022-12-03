import React from 'react';
import Sleeping from '../assets/sleeping.svg';
import CarWarning from '../assets/car-warning.svg';
import Target from '../assets/target.svg';

const Info = () => {
  return (
    <div className='flex md:p-20 xs:px-6 xs:py-10 flex-col gap-8 relative z-20'>
      <h1 className='font-[700] text-[2rem] uppercase text-grayup'>INFOS UTILES</h1>

      <div className='lg:grid lg:grid-cols-3 xs:flex xs:flex-col gap-6'>
        <div className='bg-white shadow-md rounded-lg p-6 bg-opacity-90 flex flex-col gap-3 items-center  justify-between'>
          <h3 className='font-roboto text-grapup text-xl'>Respect du Code de la route</h3>
          <p className='font-semibold'>
          Chaque conducteur se doit de respecter le Code de la route que ce soit pour éviter de se mettre lui et les autres en danger, mais aussi pour éviter des sanctions pénales.
          </p>
          <ul >
            <li>
            porter sa ceinture de sécurité ou un casque homologué ;
            </li>
            <li>
            Faites une pause au moins toutes les deux heures        
            </li>
            <li>
            la somnolence multiplie par 8 le risque d’accidents !         
              </li>
          </ul>
          <img src={Target} alt="Target" className='w-12'/>
        </div>

        <div className='bg-white shadow-md rounded-lg p-6 bg-opacity-90 flex flex-col gap-3 items-center justify-between'>
          <h3 className='font-roboto text-grayup text-xl'>Comportement adapté</h3>
          <p className='font-semibold'>Les conducteurs doivent adapter leur comportement à chaque situation, et être vigilants notamment dans les conditions de circulation difficiles telles que :
          </p>
          <ul>
            <li>la nuit </li>
            <li>par temps de pluie, neige, verglas...</li>
            <li>en circulation dense ;</li>
          </ul>
          <img src={CarWarning} alt="Warning" className='w-12'/>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 bg-opacity-90 flex flex-col gap-3 items-center justify-between'>
          <h3 className='font-roboto text-grapup text-xl'>Éviter la fatigue et la somnolence</h3>
          <p className='font-semibold'>De nombreux accidents ont lieu lorsque le conducteur se trouve en situation de fatigue ou de somnolence. Ainsi, les conducteurs doivent s'arrêter au moins toutes les 2 heures et faire des pauses d'au moins 20 minutes en cas de conduite sur autoroute, mais aussi de long trajet.
          </p>
          <img src={Sleeping} alt="Sleeping" className='w-12'/>
        </div>
      </div>
    </div>
  )
}

export default Info
