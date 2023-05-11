import React, { useState } from "react";
import "./inputModal.css";

function InputModal(props) {
  var initValue = props.initValue;
  var getInputCallback = props.getInputCallback;
  var closeModalCallback = props.closeModalCallback;
  var [modalErrorMessage, setModalErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var userInput = event.target.clientID.value;
    if (userInput == "") {
      setModalErrorMessage("ClientID can't be null");
    } else {
      getInputCallback(userInput);
    }
  };

  return (
    <div>
      <div className="modal-bg">
        <div className="input-modal">
          <img
            className="input-modal-close"
            src="assets/icons/close.svg"
            onClick={closeModalCallback}
          ></img>
          <p className="heading3">Enter clientID</p>
          <p className="subHeading margin-top-8">
            Entered clientId will be verified from our backend services
          </p>
          <form className="inputModal-textfield-flex" onSubmit={handleSubmit}>
            <input
              type="text"
              name="clientID"
              className="inputModal-textfield"
              placeholder={initValue}
            />
            <input
              type="submit"
              className="inputModal-button buttonText"
            ></input>
          </form>
          {modalErrorMessage != "" && (
            <p className="input-modal-error">{modalErrorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputModal;
