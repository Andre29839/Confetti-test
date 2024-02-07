import { Link, animateScroll as scroll } from "react-scroll";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import text from "@/text/text.json";

import { menuNav } from "@/constantes/menuNav";
import svgClose from "@/assets/cross.svg";

import {
  ModalHeader,
  ModalItem,
  ModalList,
  ModalMenu,
  ModalTitle,
} from "./Modal.styled.js";

export const Modal = ({ handleCloseModal, isOpen }) => {
  const handleItemClick = useCallback(
    (id) => {
      handleCloseModal();
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(top);
      } else {
        console.error(`Element with id ${id} not found`);
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEsc = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [handleEsc]);

  const handleTitleClick = useCallback(() => {
    handleCloseModal();
    scroll.scrollToTop();
  }, [handleCloseModal]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalMenu>
        <ModalHeader>
          <ModalTitle onClick={handleTitleClick}>{text.modalText}</ModalTitle>
          <Image
            src={svgClose}
            alt="burger menu close"
            width={24}
            height={24}
            onClick={handleCloseModal}
            style={{ cursor: "pointer" }}
            aria-label="close modal"
          />
        </ModalHeader>
        <ModalList>
          {menuNav.map((item, index) => (
            <Link
              to={item.id}
              smooth={true}
              offset={-70}
              duration={1000}
              key={index}
              aria-label={item}
            >
              <ModalItem key={index} onClick={() => handleItemClick(item.id)}>
                {item.text}
              </ModalItem>
            </Link>
          ))}
        </ModalList>
      </ModalMenu>
    </motion.div>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
