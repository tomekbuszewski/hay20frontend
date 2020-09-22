export const setCredentials = ({
  username,
  token,
  id,
}: {
  username: string;
  token: string;
  id: string;
}) => {
  localStorage.setItem("username", username);
  localStorage.setItem("token", token);
  localStorage.setItem("id", id);
};
