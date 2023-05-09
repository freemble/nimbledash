import React from "react";
import "./inputModal.css";

function InputModal(props) {
  var cardIconAddress = props.cardIconAddress;

 const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.clientID.value)
  }

  return (
    <div>
      <div className="modal-bg">
        <div className="modal">
          <p className="heading3">Enter clientID</p>
          <p className="subHeading margin-top-8">
            Entered clientId will be verified from our backend services
          </p>
              <form className="inputModal-textfield-flex" onSubmit={handleSubmit}>
                  <input type="text" name="clientID" className="inputModal-textfield" />
                  <input type="submit"  className="inputModal-button buttonText">
                  </input>
              </form>
            
        </div>
      </div>
    </div>
  );
}

export default InputModal;
