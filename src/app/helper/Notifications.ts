import { message } from "antd";

const success = (content: string) => {
  message.success(content);
};

const error = (content: string) => {
  message.error(content);
};

const warning = (content: string) => {
  message.warning(content);
};

export { success, error, warning };
