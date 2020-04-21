import joi from '@hapi/joi';

export const getProfile = joi.object({
  body: joi.object({
    ong_id: joi.string().required(),
  })
});