import React from 'react';
import './index.css';
import { Badge, Button } from 'react-bootstrap';

function ContactCard({ contact: { name, phoneNumber, id, image } }) {
  return (
    <div className={'contact_card'}>
      <div className={'contact_card_row'}>
        <div className='form_check'>
          <input type='checkbox' id={id} />
          <label htmlFor={id} />
        </div>
        <div className={'contact_info'}>
          <div className={'contact_avatar'}>
            <img
              src={`${image ? image : './assets/images/avatar.png'}`}
              alt={'avatar'}
            />
          </div>
          <div className={'contact_detail'}>
            <span className={'contact_name'}>{name}</span>
            <span className={'contact_number'}>{phoneNumber}</span>
          </div>
        </div>
        <div className={'contact_tags'}>
          <Badge bg={'success'}>badge</Badge>
          <Button variant={'success'} className={'btn_round_sm'}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
