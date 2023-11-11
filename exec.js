"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execTime = void 0;
function execTime(originalMethod, context) {
    return function (...args) {
        if (context.kind !== "method")
            throw new Error("Available only for method");
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`execution time with args [${args}], ${end - start}ms`);
        return result;
    };
}
exports.execTime = execTime;
