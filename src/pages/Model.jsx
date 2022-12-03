import React, { useState } from 'react';
import { Mapbox, InputGroup, Modal } from '../components';
import { predict } from '../api/api';
import { fields, cases } from '../utils/constants'


const Model = () => {
  const [latitute, setLatitute] = useState('')
  const [longitude, setLongitude] = useState('')
  const [pred, setPred] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    let values = fields.map(v => ({ [v[1]] : e.target.elements[v[1]].value}))
    values = Object.assign({}, {latitude: latitute, longitude: longitude}, ...values)

    const res = await predict(convertIntObj(values))
    const data = await res.json();

    const code  = parseInt(data?.msg);
    if(isFinite(code)) {
      setPred(code- 1);
      setShow(true);
    } else {
      alert(data?.msg);
    }
  }

  return (
    <div className='relative z-20 flex flex-col font-montserrat p-16 justify-between gap-8 text-center'>
      <Modal show={show} extra='flex flex-col gap-4 items-center'>
        <span className="text-red-700 text-xl" onClick={() => setShow(false)}>X</span>

        <h3 className='font-montserrat text-xl font-semibold'>{cases[pred].msg}</h3>
        <img src={cases[pred].image} className="w-10 cursor-pointer" alt={cases[pred].msg} />
        <p>
          {cases[pred].cons}
        </p>
      </Modal>

      <h3 className='font-[700] text-[2.5rem] uppercase text-grayup'>Faire une Prédiction</h3>
      <p>
        Le modéle permet de classer un éventuel accident en 3 catégories<br/>
        Clicker sur la carte pour choisir votre destination.
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
