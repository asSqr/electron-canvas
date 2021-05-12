"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var console_1 = __importDefault(require("console"));
electron_1.contextBridge.exposeInMainWorld('console', new console_1.default.Console(process.stdout, process.stderr));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvcmUvcHJlbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF5QztBQUN6QyxvREFBOEI7QUFFOUIsd0JBQWEsQ0FBQyxpQkFBaUIsQ0FDN0IsU0FBUyxFQUNULElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZXh0QnJpZGdlIH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IGNvbnNvbGUgZnJvbSAnY29uc29sZSc7XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoXG4gICdjb25zb2xlJyxcbiAgbmV3IGNvbnNvbGUuQ29uc29sZShwcm9jZXNzLnN0ZG91dCwgcHJvY2Vzcy5zdGRlcnIpLFxuKTtcbiJdfQ==