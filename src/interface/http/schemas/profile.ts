import joi from '@hapi/joi';

export const getProfile = joi.object({
  header: joi.object({
    authorization: joi.string().required(),
  })
});