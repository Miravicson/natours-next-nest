import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalName =
  | 'my-modal'
  | 'cart.list'
  | 'cart.checkout'
  | 'dashboard.selectedEvent'
  | 'dashboard.createEvent';

export type ModalState = {
  open: boolean;
  payload?: { path?: string; item?: any; onComplete?: (newItem: any) => void };
};

type PayloadType = { modal: ModalName; state: ModalState };

const initialState: Record<ModalName, ModalState> = {
  'my-modal': { open: false },
  'cart.list': { open: false },
  'cart.checkout': { open: false },
  'dashboard.selectedEvent': { open: false },
  'dashboard.createEvent': { open: false },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalState: (state: Record<ModalName, ModalState>, action: PayloadAction<PayloadType>) => {
      state[action.payload.modal] = action.payload.state;
    },
  },
});

export const { setModalState } = modalSlice.actions;

export default modalSlice.reducer;
