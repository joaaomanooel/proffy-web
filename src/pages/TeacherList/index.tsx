import './styles.css'
import React from 'react';
import { PageHeader, TeacherItem } from '../../Components';

const teachers = [
  {
    // avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    name: 'João N.',
    title: 'Software Engnier',
    decription: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    price: 95,
    phone: '+5551999999999',
  },
  {
    name: 'João N.',
    title: 'Software Engnier',
    decription: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    // price: 95,
    phone: '+5551999999999',
  },
]

export default () => {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        {teachers.map(teacher => <TeacherItem teacher={teacher} />)}
      </main>
    </div>
  );
};
