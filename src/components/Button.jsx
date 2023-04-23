function Button({operador, fn}) {   //los Props que se les pasan a los componentes son objetos, así que puedo hacer destructuing
  return (
    <div>
        <button
           type='button'
           className='h-10 w-10 flex justify-center items-center font-bold text-white text-2xl rounded-full bg-lime-500 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
           onClick={fn}
            >{operador}</button>
    </div>
  )
}

export default Button