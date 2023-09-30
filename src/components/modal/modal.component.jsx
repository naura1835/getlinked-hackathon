// import PropTypes from "prop-types";

import { ModalBody, ModalWrapper } from "./modal.styles";

const Modal = ({ setIsOpen, children }) => {
  return (
    <ModalWrapper onClick={() => setIsOpen(false)}>
      <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
    </ModalWrapper>
  );
};

export default Modal;

// Modal.protoTypeS = {
//   setIsOpen: PropTypes.func,
//   children: PropTypes.array,
// };
