import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { Fragment, ReactElement } from 'react';

import utilStyles from '@/styles/styles';

import styles from './BaseModal.module.css';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  heading: string;
  children?: ReactElement | ReactElement[];
};

const BaseModal: React.FC<Props> = ({ isOpen, handleClose, children, heading }) => {
  return (
    <div className={`${styles.Modal}`}>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <XMarkIcon className={`absolute right-10 top-[1.5%] hidden md:block`} onClick={handleClose} />
            <div className="flex min-h-full pt-[15%] text-center md:pt-16">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`relative w-full ${utilStyles.xPaddings} overflow-hidden rounded-t-2xl bg-white px-4 pb-4 pt-6 text-left align-middle shadow-xl transition-all md:pt-[2rem] lg:pt-[2.5rem] xl:pt-[3.5rem]`}
                >
                  <XMarkIcon onClick={handleClose} className={`absolute right-4 top-6 md:hidden`} />
                  <Dialog.Title as="h3" className={`text-center text-base font-medium md:text-left md:text-2xl`}>
                    {heading}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default BaseModal;
