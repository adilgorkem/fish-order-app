import classes from './Modal.module.css'

const Backdrop = (props) => {

return <div className={classes.backdrop} onClick={props.onClose}></div>    

}

const ModalOverlay = props => {

return <div className={classes.modal} >
    <div className={classes.content}>{props.children}</div> {/*With props.children this component will include the elements inside it where it is called (in our case it's the Cart component).*/}
</div>

}

export { Backdrop };
export { ModalOverlay };