import { JSX, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { Button } from '@/Components/UI/Button';
import { Input } from '@/Components/UI/Input';
import { createUserSchema } from './schema';
import styles from './Styles.module.scss';

function CreateUserComponent(): JSX.Element {
  const createUserForm = useForm({
    resolver: yupResolver(createUserSchema),
    defaultValues: {
      surname: '',
      name: '',
      patronymic: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: InferType<typeof createUserSchema>) => {
    console.log(data);
  };

  return (
    <div className={styles.createUser}>
      <form className={styles.createUser__form} onSubmit={createUserForm.handleSubmit(onSubmit)}>
        <h2 className={styles.createUser__title}>Создание пользователя</h2>
        <Controller
          name="surname"
          control={createUserForm.control}
          render={({ field }) => (
            <Input
              name={field.name}
              type="text"
              label="Фамилия"
              isRequired
              placeholder="Иванов"
              value={field.value}
              onChange={field.onChange}
              error={createUserForm.formState.errors.surname?.message}
            />
          )}
        />
        <Controller
          name="name"
          control={createUserForm.control}
          render={({ field }) => (
            <Input
              name={field.name}
              type="text"
              label="Имя"
              isRequired
              placeholder="Иван"
              value={field.value}
              onChange={field.onChange}
              error={createUserForm.formState.errors.name?.message}
            />
          )}
        />
        <Controller
          name="patronymic"
          control={createUserForm.control}
          render={({ field }) => (
            <Input
              name={field.name}
              type="text"
              label="Отчество"
              placeholder="Иванович"
              value={field.value ?? ''}
              onChange={field.onChange}
              error={createUserForm.formState.errors.patronymic?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={createUserForm.control}
          render={({ field }) => (
            <Input
              name={field.name}
              type="text"
              label="Почта"
              isRequired
              placeholder="ivanov@example.com"
              value={field.value}
              onChange={field.onChange}
              error={createUserForm.formState.errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={createUserForm.control}
          render={({ field }) => (
            <Input
              name={field.name}
              type="password"
              label="Пароль"
              isRequired
              placeholder="Минимум 10 символов"
              value={field.value}
              onChange={field.onChange}
              error={createUserForm.formState.errors.password?.message}
            />
          )}
        />
        <div className={styles.createUser__buttons}>
          <Button type="submit" size="s" fullWidth color="blue">
            Создать
          </Button>
        </div>
      </form>
    </div>
  );
}

export const CreateUser = memo(CreateUserComponent);
