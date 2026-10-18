import { Popup } from '@/Components/Layouts/Popup';
import { createAddUserSchema } from './schema';
import { Button } from '@/Components/UI/Button';
import { Input } from '@/Components/UI/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { JSX, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { InferType } from 'yup';
import styles from './Styles.module.scss';
import { useNavigate } from 'react-router-dom';

function AddUserPopupComponent(): JSX.Element {
  const addUserSchema = createAddUserSchema(true);
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(addUserSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: InferType<typeof addUserSchema>) => {
    console.log(data);
  };

  const onClick = async () => {
    await form.trigger().then(() => {
      console.log(form.formState.errors);
    });
  };

  return (
    <Popup
      displayCloseButton
      onClose={() => {
        navigate(-1);
        form.reset();
      }}
    >
      <div className={cn('popup', styles.addUserPopup)}>
        <h1>{`${'Добавление'} пользователя`}</h1>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Controller
            name="surname"
            control={form.control}
            render={({ field }) => (
              <Input
                isRequired={true}
                label="Фамилия"
                value={field.value}
                onChange={field.onChange}
                type="text"
                placeholder="Фамилия"
                error={form.formState.errors.surname?.message}
              />
            )}
          />
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <Input
                isRequired={true}
                value={field.value}
                onChange={field.onChange}
                type="text"
                placeholder="Имя"
                label="Имя"
                error={form.formState.errors.name?.message}
              />
            )}
          />
          <Controller
            name="patronymic"
            control={form.control}
            render={({ field }) => (
              <Input
                isRequired={true}
                value={field.value}
                onChange={field.onChange}
                type="text"
                placeholder="Отчество"
                label="Отчество"
                error={form.formState.errors.patronymic?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <Input
                isRequired={true}
                value={field.value}
                onChange={field.onChange}
                type="text"
                pseudoContent=""
                placeholder="Почта"
                label="Почта"
                error={form.formState.errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <>
                <Input
                  isRequired={true}
                  value={field.value ? field.value?.first || '' : ''}
                  onChange={val => field.onChange({ ...field.value, first: val })}
                  type="password"
                  pseudoContent=""
                  placeholder="Пароль"
                  label="Пароль"
                  error={form.formState.errors.password?.message}
                />
                <Input
                  isRequired={true}
                  value={field.value ? field.value.repeat || '' : ''}
                  onChange={val => field.onChange({ ...field.value, repeat: val })}
                  type="password"
                  pseudoContent=""
                  placeholder="Повторитe пароль"
                  label="Повторитe пароль"
                  error={form.formState.errors.password?.message}
                />
              </>
            )}
          />
          <div className={'popup__buttons'}>
            {
              <Button onClick={onClick} size="s" color="blue" type="submit">
                {'Добавить'}
              </Button>
            }
          </div>
        </form>
      </div>
    </Popup>
  );
}

export const AddUserPopup = memo(AddUserPopupComponent);
