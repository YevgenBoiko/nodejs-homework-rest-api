const Joi = require("joi");
const phoneNum = Joi.extend(require("joi-phone-number"));

const addSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: phoneNum
    .string()
    .phoneNumber({ defaultCountry: "UK", format: "international" })
    .required(),
});

module.exports = { addSchema };
