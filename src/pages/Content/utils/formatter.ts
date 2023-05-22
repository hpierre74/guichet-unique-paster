import { set } from 'immutable-set';

export type GuichetFormMapping = {
  [key: string]: string;
};

export const formatToGuichetUnique = (data: any) => {
  let formattedData = {};

  Object.keys(data).forEach((key) => {
    const value = data[key];

    formattedData = set(formattedData, key, value);
  });

  return formattedData;
};
