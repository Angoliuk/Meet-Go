import './Modal.css'

export const Modal = (Component) => {
  return(
    <div>
      <div className="modalBackground"></div>
        <div className="modal">
        {Component}
        </div>
    </div>
  )
};
