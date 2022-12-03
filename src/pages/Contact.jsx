import React from 'react';
import { InputGroup } from '../components';

const Contact = () => {
  return (
    <div className='flex flex-col gap-6  items-center md:p-10 xs:px-4 xs:py-10 relative z-20'>
       <h1 className='font-[700] text-[2rem] uppercase text-grayup'>CONTACT</h1>
       <form onSubmit={(e) => {e.preventDefault(); alert('Messsage Envoyé')}}
          className='bg-gray-50 p-10 max-w-[40rem] xs:w-full md:w-[80%] bg-opacity-50 rounded-xl flex flex-col gap-6 text-left'
        >
          <h3 className='text-center'>Vous pouvez nous contacter à travers ce formulaire 😇</h3>
           <InputGroup key='nom' label='Nom' name='nom' />
           <InputGroup  key='email' label='Email' type='email' name='email' />
           <label htmlFor='message'>Message</label>
           <textarea name='message' className='rounded-lg sm:h-[10rem] xs:h-[7rem]' >

           </textarea>
           <button type='submit' className='bg-primary p-4 text-white text-xl font-semibold shadow-lg border-primary border-1 rounded-xl' >Envoyer</button>
       </form>
    </div>
  )
}

export default Contact
