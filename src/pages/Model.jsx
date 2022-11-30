import React from 'react';
import { NavLink } from 'react-router-dom';
import { InputGroup } from '../components';
import Accident from '../assets/accident.png';

const fields = [['Longitude', 'longitude'], ['Latitude', 'latitude'], ['Age du Conducteur', 'age_of_driver'], ['Age du Véhicule', 'age_of_vehicle'], ['Capacité Véhicule', 'engine_capacity_cc'], ['Type du véhicule', 'vehicle_type' ,['Vélo', 'Moto 50cc', 'Moto 50cc', 'Moto 50-125cc', 'Moto 125-500cc', 'Moto +500cc', 'Taxi', 'Voirture', 'Minibus', 'Bus', 'Tram', 'Camion', 'Moto Electrique']], ['Jour', 'day_of_week',['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']], ['Conditon Météréologique','weather_conditions', ['Normal - Sans Vent', 'Pluvieux - Sans Vent', 'Neigeux', 'Normal - Avec Vent', 'Pluvieux - Avec Vent', 'Neige Avec Vent', 'Brouillard']], ['Lumiére', 'light_conditions' ,['Jour', 'Nuit Avec Lumiere', 'Nuit Sans Lumiere', 'Sombre']], ['Condition de route', 'road_surface_conditions', ['Sec', 'Mouillé', 'Neige', 'Glace', 'Brouillard', 'Argile']], ['Genre', 'gender', ['M', 'F']], ['Limite Vitesse', 'speed_limit']]

const Model = () => {
  return (
    <div className='relative z-20 flex font-montserrat p-16 justify-between'>
      <div className='flex flex-col gap-6 items-center'>
       <h3 className='font-[700] text-xl uppercase text-white'>Faire une Prédiction</h3>

        <form className='bg-gray-50 p-10 w-[40rem] bg-opacity-50 rounded-xl flex flex-col gap-6'>

          {fields.map((v, i) => {
            if(v.length == 2){
                return (<InputGroup key={i} label={v[0]} name={v[1]}/>)
            } else {
              return (
                <div key={i} className="flex flex-col">
                  <label htmlFor={v[1]} className='text-lg font-semibold' >{v[0]}</label>
                  <select name={v[1]} id={v[1]} className='p-3 rounded-lg'>
                    {v[2].map((l, j) => (
                      <option key={j} value={j+1}>{l}</option>
                    ))}
                  </select>
                </div>
              )
            }
          })}
          
          <button type='submit' className='bg-primary p-4 text-white text-xl font-semibold shadow-lg border-primary border-1 rounded-xl'>Valider</button>
        </form>
      </div>

      <div>
        <img src={Accident} alt="Accident image"/>
      </div>
    </div>
  )
}

export default Model;
