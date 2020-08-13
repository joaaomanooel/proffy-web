import './styles.css'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PageHeader, Input, Textarea, Select } from '../../Components';

import warningIcon from '../../assets/images/icons/warning.svg'
import { subjects, weekDays } from '../../helpers';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const newItem = { week_day: 0, from: '', to: '' }
  const [scheduleItems, setScheduleItems] = useState([newItem]);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [price, setPrice] = useState('');

  const addNewScheduleItem = () => setScheduleItems([...scheduleItems, newItem]);

  const setValue = (fn: Function) =>
    ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      fn(target.value);

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();

    const classData = { name, avatar, whatsapp, bio, subject, price, schedule: scheduleItems }
    api.post('classes', classData)
      .then(() => alert('Cadastro realizado com sucesso!'))
      .catch(() => alert('Erro ao realizar o cadastro. Tente novamente.'))

    history.push('/');
  };

  const setScheduleItemValue = (position: number, field: 'week_day' | 'from' | 'to') =>
    ({ target }: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => (index === position)
        ? { ...scheduleItem, [field]: target.value }
        : scheduleItem)

      setScheduleItems(updatedScheduleItems);
    }

  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        description="O primeiro passo é preencher esse formulário de inscrição"
        title="Que incrivel que você quer dar aulas."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input label="Nome completo" name="name" value={name} onChange={setValue(setName)} />
            <Input label="Avatar" name="avatar" value={avatar} onChange={setValue(setAvatar)} />
            <Input
              label="WhatsApp"
              name="whatsapp"
              value={whatsapp}
              onChange={setValue(setWhatsapp)} />
            <Textarea label="Biográfia" name="bio" value={bio} onChange={setValue(setBio)} />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              name="subject"
              options={subjects}
              value={subject}
              onChange={setValue(setSubject)} />
            <Input
              label="Custo da sua hora por aula"
              name="price"
              value={price}
              onChange={setValue(setPrice)} />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponiveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
            </legend>

            {!!scheduleItems.length && scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  onChange={setScheduleItemValue(index, 'week_day')}
                  value={scheduleItem.week_day}
                  label="Dia da semana"
                  options={weekDays}
                  name="week_day" />

                <Input
                  onChange={setScheduleItemValue(index, 'from')}
                  value={scheduleItem.from}
                  label="Das"
                  name="from"
                  type="time" />

                <Input
                  onChange={setScheduleItemValue(index, 'to')}
                  value={scheduleItem.to}
                  label="Até"
                  type="time"
                  name="to" />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Inportante" /> Importante <br />
              Preecha todos os dados.
            </p>

            <button type="submit" >Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};
