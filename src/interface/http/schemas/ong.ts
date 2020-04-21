import joi from '@hapi/joi';

export const postOng = joi.object({
  body: joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    whatsapp: joi.string().required(),
    city: joi.string().required(),
    uf: joi.string().required(),
  }),
});
