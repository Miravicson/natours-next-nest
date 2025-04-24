import React from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { ModalName, setModalState } from './modalSlice';

export const useModal = (modal: ModalName) => {
  const dispatch = useAppDispatch();
  const { open: isOpen } = useAppSelector((state) => state.modal[modal]);

  const handleClose = React.useCallback(() => {
    dispatch(setModalState({ modal, state: { open: false } }));
  }, [dispatch, modal]);

  const handleOpen = React.useCallback(() => {
    dispatch(setModalState({ modal, state: { open: true } }));
  }, [dispatch, modal]);

  return { handleClose, isOpen, handleOpen };
};
