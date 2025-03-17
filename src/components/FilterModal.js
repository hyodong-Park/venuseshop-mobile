import '../styles/main.css'
import { useEffect, useRecoilState  } from "react";
import Modal from "react-modal";


function FilterModal({ isOpen, onClose, content }) {

    // const [modalOpen, setModalOpen] = useRecoilState(popUpModal);

  return (
      <Modal

          style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
      >
        <h2>{content.title}</h2>
        <button onClick={onClose}>닫기</button>
      </Modal>
  );
}


export default FilterModal;
