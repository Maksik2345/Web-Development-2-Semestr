import * as yup from 'yup';

export const createAddUserSchema = (isPasswordRequired: boolean) => {
  return yup.object().shape({
    surname: yup.string().required('Введите фамилию'),
    name: yup.string().required('Введите имя'),
    patronymic: yup.string().required('Введите отчество'),
    email: yup.string().required('Введите почту').email('Введите корректную почту'),
    isActive: yup.boolean().default(true),
    password: yup
      .object({
        first: isPasswordRequired ? yup.string().required('Введите пароль') : yup.string(),
        repeat: isPasswordRequired ? yup.string().required('Повторите пароль') : yup.string(),
      })
      .test('passwords-match', 'Пароли не совпадают', function (value) {
        if (!isPasswordRequired && !value?.first && !value?.repeat) {
          return true;
        }
        return value?.first === value?.repeat;
      }),
  });
};
