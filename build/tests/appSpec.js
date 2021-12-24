"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../server/app"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(app_1.default);
describe('Test endpoint responses', function () {
    it('gets the api endpoint', function (done) {
        return request.get('/api?name=encenadaport.jpg').then(function (response) {
            expect(response.status).toBe(200);
            done();
        });
    });
    it('gets the api endpoint', function (done) {
        return request.get('/api?name=encenadapoort.jpg').then(function (response) {
            expect(response.status).toBe(400);
            done();
        });
    });
});
