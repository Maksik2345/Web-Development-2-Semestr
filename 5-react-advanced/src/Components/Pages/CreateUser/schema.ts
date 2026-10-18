import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
  surname: yup.string().required('Введите фамилию'),
  name: yup
    .string()
    .required('Введите имя')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(50, 'Имя должно содержать максимум 50 символов'),
  patronymic: yup.string(),
  email: yup.string().required('Введите почту').email('Введите корректную почту'),
  password: yup.string().required('Введите пароль').min(10, 'Пароль должен содержать минимум 10 символов'),
});
