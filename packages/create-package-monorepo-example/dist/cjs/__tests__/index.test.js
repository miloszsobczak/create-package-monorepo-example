"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe('packageFunction', () => {
    it('should return provided name', async () => {
        const name = 'test';
        expect((0, index_1.default)(name)).toBe(name);
    });
});
//# sourceMappingURL=index.test.js.map