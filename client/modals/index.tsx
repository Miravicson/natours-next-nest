import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { ModalName, setModalState } from '@/store/modal/modalSlice';

import MyModal from './MyModal';

type QueryParams = {
  modal?: ModalName;
};

const ModalWrapper: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { modal, ...rest } = router.query as QueryParams;
    if (!modal) return;

    dispatch(setModalState({ modal, state: { open: true, payload: { item: rest } } }));
  }, [dispatch, router.query]);

  return (
    <>
      <MyModal />
    </>
  );
};

export default ModalWrapper;
