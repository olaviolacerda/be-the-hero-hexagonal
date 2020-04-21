import joi from '@hapi/joi';

export const postIncident = joi.object({
  headers: joi.object({
    authorization: joi.string().alphanum().required(),
  }),
  body: joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    value: joi.number().required(),
  }),
});

export const getIncidents = joi.object({
  query: joi.object({
    page: joi.number().min(1),
  })
});

export const deleteIncident = joi.object({
  params: joi.object({
    id: joi.string(),
  }),
  headers: joi.object({
    authorization: joi.string().alphanum().required(),
  })
})