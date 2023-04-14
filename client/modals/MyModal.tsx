import React from 'react';

import { useModal } from '@/store/modal/hooks';

import BaseModal from './BaseModal';

const MyModal: React.FC = () => {
  const { isOpen, handleClose } = useModal('my-modal');
  return <BaseModal isOpen={isOpen} handleClose={handleClose} heading={'MyModal'}></BaseModal>;
};

export default MyModal;
