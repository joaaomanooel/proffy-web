import './styles.css';
import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import { toCurrency, getAleatoryAvatar } from '../../helpers';

interface TeacherItemProps {
  teacher: {
    avatar?: string,
    name: string,
    title: string,
    decription: string,
    price?: number,
    phone?: string,
  }
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar || getAleatoryAvatar()} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.title}</span>
        </div>
      </header>
      <p>{teacher.decription}</p>

      <footer>
        <p>
          Preço/hora: <strong>{teacher.price ? toCurrency(teacher.price) : 'Grátis'}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
