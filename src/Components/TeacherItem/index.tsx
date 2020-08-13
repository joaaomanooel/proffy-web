import './styles.css';
import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import { toCurrency } from '../../helpers';
import Teacher from '../../interfaces/Teacher';
import api from '../../services/api';

interface TeacherItemProps {
  teacher: Teacher
}

const defaultAvatar: string = ' https://api.adorable.io/avatars/285/abott@adorable.png'

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post('connections', { user_id: teacher.id })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar || defaultAvatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.title}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora: <strong>{teacher.price ? toCurrency(teacher.price) : 'Grátis'}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.phone}`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
