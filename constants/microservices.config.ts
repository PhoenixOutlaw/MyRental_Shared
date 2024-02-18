export const AUTH_SERVICES = {
  mpin: {
    create: "createMpin",
    verify: "verifyMpin",
  },
  authentication: {
    getLoggedInUser: "getLoggedInUser",
    createNewUser: "createNewUser",
    signIn: "login",
    updateUser: "updateUser"
  },
};
export const COMMUNICATION_SERVICES = {
  sendIntroMails: "sendIntroMails",
  // ItroEmail: "notification",
  // OtpVerification: "",
};
export const MAIN_SERVICES = {
  building: {
    add: "addBuilding",
    modify: "modifyBuilding",
    remove: "removeBuilding",
    getBuilding: "getBuilding",
    getAllBuildings: "getAllBuildings",
  },
  floor: {
    add: "addFloor",
    modify: "modifyFloor",
    remove: "removeFloor",
    getFloor: "getFloor",
    getAllFloors: "getAllFloors",
  },
  room: {
    add: "addRoom",
    modify: "modifyRoom",
    remove: "removeRoom",
    getRoom: "getRoom",
    getAllRooms: "getAllRooms",
  },
};

export const MICROSERVICES = {
  communication: {
    provider: "COMMUNICATION_SERVICE",
    queue: "COMMS_QUEUE",
    services: COMMUNICATION_SERVICES,
  },
  authentication: {
    provider: "AUTHENTICATION_SERVICE",
    queue: "AUTH_QUEUE",
    services: AUTH_SERVICES,
  },
  main: {
    provider: "MAIN_SERVICE",
    queue: "MAIN_QUEUE",
    services: MAIN_SERVICES,
  },
};
