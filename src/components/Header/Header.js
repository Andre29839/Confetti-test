import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import logo from "@/assets/logo.svg";

import text from "@/text/text.json";

import {
  HeaderContainer,
  Menu,
  FixedContainer,
  BurgenMenu,
  HeaderMain,
} from "./Header.styled";
import { BurgerMenuIcon } from "@/constantes/icons";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <HeaderMain>
      <HeaderContainer>
        <Image
          aria-label="Logo"
          src={logo}
          alt="Confetti Logo"
          width={104}
          height={32}
        />
        <BurgenMenu>
          <Menu onClick={handleOpenModal}>{text.headerText}</Menu>
          <FixedContainer
            type="button"
            $isOpen={isOpen}
            onClick={handleOpenModal}
          >
            <BurgerMenuIcon />
          </FixedContainer>
        </BurgenMenu>
        <AnimatePresence>
          {isOpen && (
            <Modal isOpen={isOpen} handleCloseModal={handleCloseModal} />
          )}
        </AnimatePresence>
      </HeaderContainer>
    </HeaderMain>
  );
};
