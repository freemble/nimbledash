import React from "react";

function InputModal(props) {
  var cardIconAddress = props.cardIconAddress;

  return (
    <div>
      <div className="modal-bg">
        <div className="modal">
          <p>Enter clientID</p>
          <p>Entered clientId will be verified from our backend services</p>
          <div className="inputModal-textfield-flex"></div>
          <div className="inputModal-textfield"></div>
          <div className="inputModal-button">
            <p>Verify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
