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
exports.Tenent = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const rent_entity_1 = require("./rent.entity");
let Tenent = class Tenent extends typeorm_1.BaseEntity {
};
exports.Tenent = Tenent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Tenent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tenent.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Tenent.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.Length)(10, 10),
    __metadata("design:type", String)
], Tenent.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Tenent.prototype, "aadharNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json", { nullable: true }),
    __metadata("design:type", Array)
], Tenent.prototype, "tenentDocs", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Tenent.prototype, "tenetScore", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rent_entity_1.RentInfo, (rentinfo) => rentinfo.tenent),
    __metadata("design:type", Array)
], Tenent.prototype, "rentHistory", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tenent.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Tenent.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Tenent.prototype, "deletedAt", void 0);
exports.Tenent = Tenent = __decorate([
    (0, typeorm_1.Entity)()
], Tenent);
//# sourceMappingURL=tenents.entity.js.map