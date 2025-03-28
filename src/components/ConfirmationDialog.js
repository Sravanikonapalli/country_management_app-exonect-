import React from "react";
import "../styles/styles.css"; 

function ConfirmationDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
}

export default ConfirmationDialog;
