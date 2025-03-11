import Joi from "joi";

const loginschema = Joi.object({
  username: Joi.string()
    .required()
    .messages({ "any.required": "Username required" }),
  password: Joi.string()
    .required()

    .messages({
      "any.required": "Password required",
    }),
});

export default loginschema;
