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
exports.Room = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const floors_entity_1 = require("./floors.entity");
const location_entity_1 = require("./location.entity");
const rent_entity_1 = require("./rent.entity");
let Room = class Room extends typeorm_1.BaseEntity {
};
exports.Room = Room;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Room.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "ROOM" }),
    __metadata("design:type", String)
], Room.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Room.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json", { nullable: true }),
    __metadata("design:type", Array)
], Room.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "AVAILABLE_FOR_RENTING" }),
    __metadata("design:type", String)
], Room.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Room.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Room.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rent_entity_1.RentInfo, (rentInfo) => rentInfo.room),
    __metadata("design:type", Array)
], Room.prototype, "rentInfo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.individualRoom, {
        nullable: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Room.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => floors_entity_1.Floor, (floor) => floor.rooms, {
        nullable: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", floors_entity_1.Floor)
], Room.prototype, "floor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => location_entity_1.Location, (location) => location.room, { nullable: true }),
    __metadata("design:type", location_entity_1.Location)
], Room.prototype, "location", void 0);
exports.Room = Room = __decorate([
    (0, typeorm_1.Entity)()
], Room);
//# sourceMappingURL=room.entity.js.map