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
exports.Building = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const floors_entity_1 = require("./floors.entity");
const location_entity_1 = require("./location.entity");
const rent_entity_1 = require("./rent.entity");
let Building = class Building extends typeorm_1.BaseEntity {
};
exports.Building = Building;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Building.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Building.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json"),
    __metadata("design:type", Array)
], Building.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "AVAILABLE_FOR_RENTING" }),
    __metadata("design:type", String)
], Building.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Building.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Building.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.buildings, { onDelete: "CASCADE" }),
    __metadata("design:type", user_entity_1.User)
], Building.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rent_entity_1.RentInfo, (rentInfo) => rentInfo.building),
    __metadata("design:type", Array)
], Building.prototype, "rentInfo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => floors_entity_1.Floor, (floor) => floor.building),
    __metadata("design:type", Array)
], Building.prototype, "floors", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => location_entity_1.Location, (location) => location.building),
    __metadata("design:type", location_entity_1.Location)
], Building.prototype, "location", void 0);
exports.Building = Building = __decorate([
    (0, typeorm_1.Entity)()
], Building);
//# sourceMappingURL=building.entity.js.map