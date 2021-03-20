import {useState} from 'react';

import Menu from "./../../components/Menu";
import Navbar from "./../../components/Navbar";

const MenuHeader = ({bgActive}) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState);
  }

  return (
    <>
      <Menu isOpen={isOpen} />
      <Navbar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClickHamburg} />
    </>
  )
}

export default MenuHeader;
