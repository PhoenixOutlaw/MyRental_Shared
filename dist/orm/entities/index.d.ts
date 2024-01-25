import { Building } from "./building.entity";
import { Floor } from "./floors.entity";
import { Location } from "./location.entity";
import { RentInfo } from "./rent.entity";
import { Room } from "./room.entity";
import { Tenent } from "./tenents.entity";
import { User } from "./user.entity";
declare const ENTITIES: {
    Building: typeof Building;
    Floor: typeof Floor;
    Location: typeof Location;
    RentInfo: typeof RentInfo;
    Room: typeof Room;
    Tenent: typeof Tenent;
    User: typeof User;
};
export default ENTITIES;
