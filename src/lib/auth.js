export const mockUser = { username: "admin", password: "admin" };

export function authenticate(username, password) {
  return username === mockUser.username && password === mockUser.password;
}
