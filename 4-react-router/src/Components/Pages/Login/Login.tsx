import { JSX, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Styles.module.scss';
import { loginSchema } from './schema';
import { Button } from '@/Components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/Components/UI/Input';

function LoginComponent(): JSX.Element {
  const navigate = useNavigate();
  const loginForm = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { remember: false },
  });

  const onSubmit = async () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <form key="login-form" className={styles.container__form} onSubmit={loginForm.handleSubmit(onSubmit)}>
        <h2 className={styles.container__title}>{'Вход'}</h2>
        <Controller
          name="username"
          control={loginForm.control}
          render={({ field }) => (
            <Input
              name={field.name}
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={loginForm.formState.errors.username?.message}
              placeholder="Логин"
            />
          )}
        />
        <Controller
          name="password"
          control={loginForm.control}
          render={({ field }) => (
            <Input
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              error={loginForm.formState.errors.password?.message}
              placeholder="Пароль"
              type="password"
            />
          )}
        />
        <div className={styles.container__buttons}>
          <Button type="submit" size="s" fullWidth color="blue">
            {'Войти'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export const Login = memo(LoginComponent);
