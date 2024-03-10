import {useMemo} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';

import {
  FormProvider,
  useForm as useReactHookForm,
  UseFormProps as UseReactHookFormProps,
} from 'react-hook-form';
import {
  FieldShapeLookup,
  FormFieldNames,
  FormWrapperProps,
  UseFormProps,
} from '@components';
import {useComposeFormSchema} from './useComposeFormSchema';

export function useForm<
  K extends FormFieldNames,
  T extends FieldShapeLookup<K>,
>({schemaKeys, defaultValues, options}: UseFormProps<K, T>) {
  const schema = useComposeFormSchema<K>(schemaKeys);

  const formOptions: UseReactHookFormProps<T> = {
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
    ...options,
  };
  const formMethods = useReactHookForm(formOptions);

  return {
    formMethods,
    handleSubmit: formMethods.handleSubmit,
    register: formMethods.register,
    isValid: formMethods.formState.isValid,
    isSubmitting: formMethods.formState.isSubmitting,
  };
}

export const FormWrapper = <T extends Record<string, unknown>>({
  formMethods,
  children,
}: FormWrapperProps<T>) => {
  return <FormProvider {...formMethods}>{children}</FormProvider>;
};
