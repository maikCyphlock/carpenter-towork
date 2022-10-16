import React, { useRef } from "react";

import { tw } from "twind";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheckCircle} from "react-icons/bi";


import emailjs from "@emailjs/browser";
import { useState } from "react";

function ToWork() {
  const form = useRef();
  const [text,setText] = useState("He abierto el taller, A trabajar " +new Date().toLocaleString('en-US'))

  const sendEmail = (e) => {
    e.preventDefault();
    toast.promise(
      emailjs
        .sendForm(
          "service_xxqzv9r",
          "template_fkutwqf",
          form.current,
          "kp8eEeHKhFFzK_4G9"
        )
        .then(result =>{
           try{
            console.log(result.text);
            return result.text
          }
          catch(error) {
            console.log(error.text);
            return error.text
          }
        }
         

        ),
        {
            pending: 'se está enviando el mensaje',
            success: 'mensaje enviado con exito',
            error: 'hubo un error, intente de nuevo'
          }
    );
  };

  return (
    <div className=" p-4 flex flex-col h-100 justify-center items-center gap-4 ">
      <button
        onClick={sendEmail}
        className="mt-8 p-8 text-gray-100 text-2xl w-30 flex justify-center flex-column items-center  bg-green-400 border-4 rounded-full   hover:(border-green-400 bg-transparent text-green-400) "
      >
        A trabajar
       <span className="p-1">
          <BiCheckCircle/>
       </span>
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
       
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />

 

      <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center border-solid border-1  p-8">
        <label className="hidden">Name</label>
        <input type="text" className="hidden" value={`joel`} readOnly name="from_name" />

        <label className="p-4">si desea enviar un mensaje, escribalo aqui abajo</label>
        <textarea name="message"  className="py-8 px-8 border-1 border-green-300" value={text} onChange={(e) => setText(e.target.value) }/>
       
      </form>
    </div>
  );
}

export default ToWork;
