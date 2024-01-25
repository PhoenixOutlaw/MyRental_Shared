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
exports.Location = void 0;
const typeorm_1 = require("typeorm");
const building_entity_1 = require("./building.entity");
const floors_entity_1 = require("./floors.entity");
const room_entity_1 = require("./room.entity");
let Location = class Location extends typeorm_1.BaseEntity {
};
exports.Location = Location;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Location.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Location.prototype, "pincode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Location.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => building_entity_1.Building, (building) => building.location, {
        cascade: true,
    }),
    __metadata("design:type", building_entity_1.Building)
], Location.prototype, "building", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => floors_entity_1.Floor, (floor) => floor.location, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Location.prototype, "floor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_entity_1.Room, (room) => room.location, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Location.prototype, "room", void 0);
exports.Location = Location = __decorate([
    (0, typeorm_1.Entity)()
], Location);
//# sourceMappingURL=location.entity.js.map