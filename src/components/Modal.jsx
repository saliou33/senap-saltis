
const Modal = ({children, show, extra=''}) => {

  return (
    <>
    { show &&
      (<div className={`fixed z-40 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl p-10 w-[18rem] bg-white shadow-xl bg-opacity-90 ${extra}`}>
        {children}
      </div>)
    }
    </>
  )
}

export default Modal;
