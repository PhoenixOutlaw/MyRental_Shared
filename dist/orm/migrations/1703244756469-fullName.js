"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullName1703244756469 = void 0;
class FullName1703244756469 {
    constructor() {
        this.name = 'FullName1703244756469';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "fullName" character varying NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullName"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`);
        });
    }
}
exports.FullName1703244756469 = FullName1703244756469;
//# sourceMappingURL=1703244756469-fullName.js.map