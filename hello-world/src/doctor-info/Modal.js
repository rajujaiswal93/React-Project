import React from 'react'

function Modal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
           <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

        
        </div>
    )
}

export default Modal


