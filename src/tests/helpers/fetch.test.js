import { fetchSinToken, fetchConToken } from "../../helpers/fetch";

describe("Pruebas en el helper Fetch", () => {
  let token = "";

  test("fetchSinToken debe de funcionar", async () => {
    const resp = await fetchSinToken(
      "auth",
      { email: "email@email.com", password: "123456" },
      "POST"
    );
    expect(resp instanceof Response).toBe(true);
    const body = await resp.json();
    expect(body.ok).toBe(true);
    token = body.token;
  });

  test("fetchConToken debe de funcionar", async () => {
    localStorage.setItem("token", token);
    const resp = await fetchConToken(
      "events/627ffceb012e1ce26dd52333123",
      {},
      "DELETE"
    );
    const body = await resp.json();
    expect(body.msg).toBe("Evento no existe por ese id");
  });
});
