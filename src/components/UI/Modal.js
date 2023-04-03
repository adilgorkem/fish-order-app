import React from 'react';
import ReactDOM from 'react-dom'; // In order to create portal we need to add this line.
import { Backdrop, ModalOverlay } from './Backdrop';


const portalElement = document.getElementById('overlays')

const Modal = props => {

    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays'))} {/*Creating portal manually. */}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)} {/*Creating portal with a constant.*/}
    </React.Fragment>
}

export default Modal;