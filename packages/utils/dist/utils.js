"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPassword = exports.dateFromUnitTime = exports.endOfDay = exports.startOfDay = exports.tryCatch = void 0;
exports.stringToBoolean = stringToBoolean;
exports.choice = choice;
exports.isObject = isObject;
exports.hashToken = hashToken;
exports.genTokenAndHash = genTokenAndHash;
const luxon_1 = require("luxon");
const node_crypto_1 = require("node:crypto");
const randomString = __importStar(require("randomstring"));
const ms_1 = __importDefault(require("./ms"));
function stringToBoolean(item) {
    if (typeof item === 'boolean')
        return item;
    return ['1', 'true'].includes(item);
}
function choice(arr) {
    if (arr.length === 0)
        throw new Error('Array cannot be empty');
    return arr[Math.floor(Math.random() * arr.length)];
}
const tryCatch = (arg) => {
    if (typeof arg === 'function') {
        try {
            const data = arg();
            return { data, error: null };
        }
        catch (error) {
            return { data: null, error: error };
        }
    }
    return arg
        .then((data) => ({ data, error: null }))
        .catch((error) => ({ data: null, error: error }));
};
exports.tryCatch = tryCatch;
function isObject(object) {
    if (!object)
        return false;
    return typeof object === 'object' && !Array.isArray(object);
}
const startOfDay = (dateTime) => {
    return luxon_1.DateTime.fromJSDate(dateTime).startOf('day').toJSDate();
};
exports.startOfDay = startOfDay;
const endOfDay = (dateTime) => {
    return luxon_1.DateTime.fromJSDate(dateTime).endOf('day').toJSDate();
};
exports.endOfDay = endOfDay;
const dateFromUnitTime = (time) => {
    const secondsFromTimeString = (0, ms_1.default)(time);
    return luxon_1.DateTime.now()
        .plus({ milliseconds: secondsFromTimeString })
        .toJSDate();
};
exports.dateFromUnitTime = dateFromUnitTime;
const randomPassword = (length = 8) => {
    return randomString.generate({
        length,
        charset: ['alphanumeric', '-'],
    });
};
exports.randomPassword = randomPassword;
/**
 *
 * @param token string token to hash
 * @returns string hashed token
 */
function hashToken(token) {
    return (0, node_crypto_1.createHash)('sha256').update(token).digest('hex');
}
function genTokenAndHash() {
    const token = (0, node_crypto_1.randomBytes)(32).toString('hex') + (0, exports.randomPassword)();
    const hashedToken = hashToken(token);
    return { token, hashedToken };
}
