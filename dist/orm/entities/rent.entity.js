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
exports.RentInfo = void 0;
const typeorm_1 = require("typeorm");
const building_entity_1 = require("./building.entity");
const floors_entity_1 = require("./floors.entity");
const room_entity_1 = require("./room.entity");
const tenents_entity_1 = require("./tenents.entity");
let RentInfo = class RentInfo extends typeorm_1.BaseEntity {
};
exports.RentInfo = RentInfo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], RentInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "MONTHLY" }),
    __metadata("design:type", String)
], RentInfo.prototype, "frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "CASH" }),
    __metadata("design:type", String)
], RentInfo.prototype, "paymentMode", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "INR" }),
    __metadata("design:type", String)
], RentInfo.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RentInfo.prototype, "rent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RentInfo.prototype, "contractDocs", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], RentInfo.prototype, "contractEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], RentInfo.prototype, "activeStatus", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RentInfo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tenents_entity_1.Tenent, (tenent) => tenent.rentHistory),
    __metadata("design:type", tenents_entity_1.Tenent)
], RentInfo.prototype, "tenent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => building_entity_1.Building, (building) => building.rentInfo, { nullable: true }),
    __metadata("design:type", building_entity_1.Building)
], RentInfo.prototype, "building", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => floors_entity_1.Floor, (floor) => floor.rentInfo, { nullable: true }),
    __metadata("design:type", floors_entity_1.Floor)
], RentInfo.prototype, "floor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, (room) => room.rentInfo, { nullable: true }),
    __metadata("design:type", room_entity_1.Room)
], RentInfo.prototype, "room", void 0);
exports.RentInfo = RentInfo = __decorate([
    (0, typeorm_1.Entity)()
], RentInfo);
//# sourceMappingURL=rent.entity.js.map