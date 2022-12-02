import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mapbox } from '../components';
import { InputGroup } from '../components';
import { apiUrl, predict } from '../api/api';

const fields = [ ['Age du Conducteur', 'age_of_driver'], ['Age du Véhicule', 'age_of_vehicle'], ['Capacité Moteur Véhicule', 'engine_capacity_cc'], ['Type du véhicule', 'vehicle_type' ,['Vélo', 'Moto 50cc', 'Moto 50cc', 'Moto 50-125cc', 'Moto 125-500cc', 'Moto +500cc', 'Taxi', 'Voirture', 'Minibus', 'Bus', 'Tram', 'Camion', 'Moto Electrique']], ['Jour', 'day_of_week',['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']], ['Conditon Météréologique','weather_conditions', ['Normal - Sans Vent', 'Pluvieux - Sans Vent', 'Neigeux', 'Normal - Avec Vent', 'Pluvieux - Avec Vent', 'Neige Avec Vent', 'Brouillard']], ['Lumiére', 'light_conditions' ,['Jour', 'Nuit Avec Lumiere', 'Nuit Sans Lumiere', 'Sombre']], ['Condition de route', 'road_surface_conditions', ['Sec', 'Mouillé', 'Neige', 'Glace', 'Brouillard', 'Argile']], ['Genre', 'sex_of_driver', ['M', 'F']], ['Limite Vitesse', 'speed_limit']]

const Model = () => {

  const [latitute, setLatitute] = useState('')
  const [longitude, setLongitude] = useState('')
  const [show, setShow] = useState(false)

  const handleMapClick = (e)  => {
    setLatitute(e.lngLat.lat)
    setLongitude(e.lngLat.lng)
  }

  const convertIntObj = (obj) => {
    const res = {}
    for (const key in obj) {

      const parsed = parseInt(obj[key], 10);
      res[key] = isNaN(parsed) ? 0 : parsed;
    }
    return res;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = fields.map(v => ({ [v[1]] : e.target.elements[v[1]].value}))
    const data = Object.assign({}, {latitude: latitute, longitude: longitude}, ...values)

    const result = predict(convertIntObj(data))
    console.log(result);
    return false;
  }

  return (
    <div className='relative z-20 flex flex-col font-montserrat p-16 justify-between gap-8 text-center'>
      <h3 className='font-[700] text-[2.5rem] uppercase text-grayup'>Faire une Prédiction</h3>
      <p>
        Le modéle permet de classer un éventuel accident en 3 catégories
      </p>
      <div>
        <Mapbox handleClick={handleMapClick} />
      </div>

      <div className='flex flex-col gap-6 items-center'>
        <h3 className='font-[700] text-[2rem] uppercase text-graydown'>Formulaire</h3>

        <form 
          className='bg-gray-50 p-10 max-w-[40rem] w-[70%] bg-opacity-50 rounded-xl flex flex-col gap-6 text-left'
          onSubmit={handleSubmit}
        >
           <InputGroup key='latitude' label='latitude' name='latitude' value={latitute} handleChange={(e) => setLatitute(e.target.value)}/>
           <InputGroup key='longitude' label='longitude' name='longitude' value={longitude} handleChange={(e) => setLongitude(e.target.value)}/>
          {fields.map((v, i) => {
            if(v.length == 2){
                return (<InputGroup key={i} label={v[0]} name={v[1]} />)
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
          
          <button type='submit' className='bg-primary p-4 text-white text-xl font-semibold shadow-lg border-primary border-1 rounded-xl' >Valider</button>
        </form>
      </div>

    </div>
  )
}

export default Model;
