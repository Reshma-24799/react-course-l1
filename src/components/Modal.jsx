import classes from './Modal.module.css';

function Modal({onClose, children}){ //object destructuring for props
    return <>
        <div className={classes.backdrop} onClick ={onClose}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
}
export default Modal;