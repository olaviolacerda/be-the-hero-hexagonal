import joi from '@hapi/joi';

export const postOng = joi.object({
  body: joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    whatsapp: joi.number().required().min(10).max(11),
    city: joi.string().required(),
    uf: joi.string().required().length(2),
  }),
});
