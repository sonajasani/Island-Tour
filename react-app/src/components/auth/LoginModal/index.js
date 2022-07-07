import React, { useState } from "react";

import { Modal } from '../../../context/Modal';
import LoginForm from "./LoginForm";
import './LoginForm.css'
/**********************************************************************************/

function LoginModal() {

  const [showLoginModal, setShowLoginModal] = useState(false);

  // if (showLoginModal){
  //   console.log(showLoginModal, ".............................")
  //   return (
  //     <Modal onClose={() => setShowLoginModal(false)}>
  //       <LoginForm setShowLoginModal={setShowLoginModal} />
  //     </Modal>
  //   )
  // }

  console.log(showLoginModal, "-----------------")
  return (
    <>
      <div onClick={() => setShowLoginModal(true)} className='login'>
        Login
      </div>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm setShowLoginModal={setShowLoginModal} />
        </Modal>
      )}
    </>
  )
}

/**********************************************************************************/

export default LoginModal;