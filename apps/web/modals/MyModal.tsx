import React from 'react';

import { useModal } from '@/store/modal/hooks';

import BaseModal from './BaseModal';

const MyModal: React.FC = () => {
  const { isOpen, handleClose } = useModal('my-modal');
  return (
    <BaseModal isOpen={isOpen} handleClose={handleClose} heading={'MyModal'}>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img" />
            <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              ×
            </a>
            <h2 className="heading-secondary u-margin-top-medium">Start booking now</h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important – Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores debitis doloribus autem ipsum
              numquam eligendi laudantium accusantium ab earum corporis quia. Maxime libero commodi beatae? Rem nulla
              expedita odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsa, vel praesentium
              repellendus accusamus consequuntur culpa laboriosam iste facilis perspiciatis corporis eos rem, est fuga
              dolorum sint qui architecto exercitationem! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolorem culpa a quaerat. Alias, iste. Deserunt expedita corporis a quam rerum voluptas laudantium
              obcaecati perferendis iure atque. Modi ipsam provident voluptatibus?
            </p>
            <a href="#" className="btn btn--primary">
              Book now
            </a>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default MyModal;
