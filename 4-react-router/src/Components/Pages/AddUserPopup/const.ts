import { ListValue } from '@/Components/UI/Select/types';

export const USER_ROLES = {
  super_admin: 'Админ',
  main_resp: 'Главный ответственный',
  resp_core: 'Ответственный за ядро',
  resp_institute: 'Ответственный за институт',
  resp_direction: 'Ответственный за направление',
  resp_program: 'Ответственный за программу',
  resp_block_course: 'Ответственный за блок курсов',
  resp_reading_division: 'Ответственный за читающее подразделение',
  resp_teacher: 'Ответственный преподаватель',
  tutor: 'Тьютор',
  scheduler_manager: 'Диспетчер расписания',
  viewer: 'Пользователь',
};

export const USER_ROLES_LIST: ListValue[] = Object.entries(USER_ROLES).map(([key, value]) => ({
  value: value,
  id: key,
}));
