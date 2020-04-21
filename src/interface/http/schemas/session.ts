import joi from '@hapi/joi';

export const postSession = joi.object({
  body: joi.object({
    ong_id: joi.string().required(),
  })
});