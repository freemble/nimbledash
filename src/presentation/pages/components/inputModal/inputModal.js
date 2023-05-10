import React from "react";
import "./inputModal.css";

function InputModal(props) {
  var initValue = props.initValue;
  var getInputCallback = props.getInputCallback;

  const handleSubmit = (event) => {
    event.preventDefault();
    getInputCallback(event.target.clientID.value);
  };

  return (
    <div>
      <div className="modal-bg">
        <div className="input-modal">
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
        </div>
      </div>
    </div>
  );
}

export default InputModal;
