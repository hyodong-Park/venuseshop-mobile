import '../styles/main.css'
import { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");


function MsgModal({ isOpen, onClose, content }) {
  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
      >
        <h2>{content.title}</h2>
        <button onClick={onClose}>닫기</button>
      </Modal>
  );
}


export default MsgModal;
