import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string()
    .required()
    .messages({ "any.required": "Username required" }),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "any.required": "Email required",
      "string.email": "Please provide a valid email address.",
    }),
  password: Joi.string()
    .required()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .messages({
      "any.required": "Password required",
      "string.pattern.base":
        "Password must be at least 8 characters long and include a capital letter, a number, and a special character.",
    }),
  password2: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": "Kindly confirm your password",
    "any.only": "Password does not match",
  }),
  role: Joi.string()
    .required()
    .valid("student", "admin", "volunteer", "donor")
    .messages({
      "any.required": "Role required",
      "any.only":
        "Role must be one of 'student',  'volunteer', 'admin', 'donor'",
    }),
});
export default registerSchema;
