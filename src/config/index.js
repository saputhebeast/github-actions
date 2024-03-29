import { Joi } from "celebrate";
import dotenv from "dotenv";

dotenv.config();

class Base {
  static get schema() {
    return {
      PORT: Joi.number().optional()
    };
  }
  static get values() {
    return {
      PORT: process.env.PORT ?? 9001
    };
  }
}

const config = Base.values;

const { error } = Joi.object(Base.schema).validate(config);

if (error) {
  console.error(`Environment validation failed. \nDetails - ${error.details[0].message}\nExiting...`);
  process.exit(1);
}

export default config;
