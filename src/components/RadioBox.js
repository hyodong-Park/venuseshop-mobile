import '../styles/main.css'
// import React, { useEffect  } from "react";


function RadioBox({label, checked, onChange}) {

    // const [modalOpen, setModalOpen] = useRecoilState(popUpModal);

  return (
      <>
          <label><input type="radio" name="sortOption" checked={checked} onChange={onChange} /><span></span>{label}</label>
      </>
  );
}


export default RadioBox;
