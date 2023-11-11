"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
const exec_1 = require("./exec");
function memo(originalMethod, context) {
    if (context.kind !== "method")
        throw new Error("Available only for method");
    const cache = new Map();
    let cachedResult = 0;
    function replacementMethod(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = originalMethod(...args);
        cachedResult = result;
        cache.set(key, result);
        return result;
    }
    return replacementMethod;
}
let Сalculations = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _complicatedCalculation_decorators;
    return _a = class Сalculations {
            complicatedCalculation(a, b) {
                for (let x = 0; x++ < 2000000000;) { }
                return a + b;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _complicatedCalculation_decorators = [exec_1.execTime, memo];
            __esDecorate(_a, null, _complicatedCalculation_decorators, { kind: "method", name: "complicatedCalculation", static: false, private: false, access: { has: obj => "complicatedCalculation" in obj, get: obj => obj.complicatedCalculation }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const calc = new Сalculations();
console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(1, 4));
console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(1, 4));
