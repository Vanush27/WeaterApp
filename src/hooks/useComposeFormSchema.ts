import * as Yup from 'yup';
import {FormFieldNames} from '@components';
// import {SchemaLike} from 'yup/lib/types';

export const useComposeFormSchema = <K extends FormFieldNames>(fields: K[]) => {
  const schemaMap: Record<FormFieldNames, any> = {
    city: Yup.string().required(),
  };

  const schema = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: schemaMap[field as FormFieldNames],
    }),
    {},
  );
  return Yup.object(schema);
};
