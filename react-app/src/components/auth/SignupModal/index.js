import React, { useState } from "react";

import { Modal } from '../../../context/Modal';
import SignupForm from "./SignupForm";

/******************************************************************************/

function SignupModal() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>
      <div className="signup" onClick={() => setShowSignUpModal(true)}>
        Signup
      </div>
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignupForm setShowSignUpModal={setShowSignUpModal} />
        </Modal>
      )}
    </>
  )
}

/******************************************************************************/

export default SignupModal;

