"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Floor = void 0;
const typeorm_1 = require("typeorm");
const building_entity_1 = require("./building.entity");
const user_entity_1 = require("./user.entity");
const room_entity_1 = require("./room.entity");
const location_entity_1 = require("./location.entity");
const rent_entity_1 = require("./rent.entity");
let Floor = class Floor extends typeorm_1.BaseEntity {
};
exports.Floor = Floor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Floor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Floor.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json", { nullable: true }),
    __metadata("design:type", Array)
], Floor.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "AVAILABLE_FOR_RENTING" }),
    __metadata("design:type", String)
], Floor.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Floor.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Floor.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rent_entity_1.RentInfo, (rentInfo) => rentInfo.floor),
    __metadata("design:type", Array)
], Floor.prototype, "rentInfo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_entity_1.Room, (rooms) => rooms.floor),
    __metadata("design:type", Array)
], Floor.prototype, "rooms", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.individualFloor, {
        nullable: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Floor.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => building_entity_1.Building, (building) => building.floors, {
        nullable: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", building_entity_1.Building)
], Floor.prototype, "building", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => location_entity_1.Location, (location) => location.floor, { nullable: true }),
    __metadata("design:type", location_entity_1.Location)
], Floor.prototype, "location", void 0);
exports.Floor = Floor = __decorate([
    (0, typeorm_1.Entity)()
], Floor);
//# sourceMappingURL=floors.entity.js.map