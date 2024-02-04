import { Link, animateScroll as scroll } from "react-scroll";
import { createPortal } from "react-dom";
import Image from "next/image";

import { menuNav } from "@/constantes/menuNav";
import svgClose from "@/assets/cross.svg";

import {
  ModalHeader,
  ModalItem,
  ModalList,
  ModalMenu,
  ModalTitle,
} from "./Modal.styled.js";
import { useEffect, useState } from "react";

export const Modal = ({ handleCloseModal }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleItemClick = (id) => {
    handleCloseModal();
    setSelectedId(id);
  };

  useEffect(() => {
    if (selectedId) {
      const element = document.getElementById(selectedId);
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(top);
      } else {
        console.error(`Element with id ${selectedId} not found`);
      }
    }
  }, [selectedId]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <ModalMenu>
      <ModalHeader>
        <ModalTitle>confetti</ModalTitle>
        <Image
          src={svgClose}
          alt="burger menu"
          width={24}
          height={24}
          onClick={handleCloseModal}
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
          >
            <ModalItem key={index} onClick={() => handleItemClick(item.id)}>
              {item.text}
            </ModalItem>
          </Link>
        ))}
      </ModalList>
    </ModalMenu>,
    document.getElementById("modal")
  );
};
