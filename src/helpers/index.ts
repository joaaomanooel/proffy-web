export const toCurrency = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`;

const AVATAR_NAME = [
  "eyes1",
  "eyes10",
  "eyes2",
  "eyes3",
  "eyes4",
  "eyes5",
  "eyes6",
  "eyes7",
  "eyes9",
  "nose2",
  "nose3",
  "nose4",
  "nose5",
  "nose6",
  "nose7",
  "nose8",
  "nose9",
  "mouth1",
  "mouth10",
  "mouth11",
  "mouth3",
  "mouth5",
  "mouth6",
  "mouth7",
  "mouth9"
]

export const getAleatoryAvatar = () => {
  const avatar = AVATAR_NAME[Math.floor(Math.random() * AVATAR_NAME.length)]
  return `https://api.adorable.io/avatars/face/${avatar}`
}

export const subjects = [
  {value: 'Artes', label: 'Artes'},
  {value: 'Biologia', label: 'Biologia'},
  {value: 'Ciências', label: 'Ciências'},
  {value: 'Educação física', label: 'Educação física'},
  {value: 'Física', label: 'Física'},
  {value: 'Geografia', label: 'Geografia'},
  {value: 'Matemática', label: 'Matemática'},
  {value: 'Português', label: 'Português'},
  {value: 'Química', label: 'Química'},
];

export const weekDays = [
  {value: 0, label: 'Domingo'},
  {value: 1, label: 'Segunda-feira'},
  {value: 2, label: 'Terça-feira'},
  {value: 3, label: 'Quarta-feira'},
  {value: 4, label: 'Quinta-feira'},
  {value: 5, label: 'Sexta-feira'},
  {value: 6, label: 'Sábado'},
]