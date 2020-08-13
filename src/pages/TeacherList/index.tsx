import './styles.css'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PageHeader, TeacherItem, Input, Select } from '../../Components';
import { subjects, weekDays } from '../../helpers';
import api from '../../services/api';
import Teacher from '../../interfaces/Teacher';

export default () => {
  const [teachers, setTeachers] = useState([] as Array<Teacher>);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const setValue = (fn: Function) =>
    ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      fn(target.value);

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();
    const params = { subject, week_day, time };
    try {
      const response = await api.get('classes', { params });
      setTeachers(response.data);
    } catch (e) {
      alert('Erro ao buscar proffys disponíveis.')
    }
  }

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            options={subjects}
            onChange={setValue(setSubject)} />

          <Select
            name="week_day"
            value={week_day}
            options={weekDays}
            label="Dia da semana"
            onChange={setValue(setWeekDay)} />

          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={setValue(setTime)} />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map(teacher => <TeacherItem key={teacher.id} teacher={teacher} />)}
      </main>
    </div>
  );
};
