import { types } from "../../types/types";

describe("Pruebas en Types", () => {
  test("los types deben de ser iguales", () => {
    expect(types).toEqual({
      uiOpenModal: "[ui] Open modal",
      uiCloseModal: "[ui] Close modal",

      eventSetActive: "[event] Set Active",
      eventLogout: "[Event] Logout event",

      eventStartNew: "[event] Start add new",
      eventAddNew: "[event] Add new",
      eventClearActiveEvent: "[event] Clear active event",
      eventUpdated: "[event] Event updated",
      eventDeleted: "[event] Event deleted",
      eventLoaded: "[event] Events loaded",

      authCheckingFinish: "[auth] Finish Checking login state",
      authStartLogin: "[auth] Start login",
      authLogin: "[auth] login",
      authStartRegister: "[auth] Start Register",
      authStartTokenRenew: "[auth] Start Token Renew",
      authLogout: "[auth] Logout",
    });
  });
});
