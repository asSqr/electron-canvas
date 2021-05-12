/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var render_1 = __importDefault(__webpack_require__(/*! ./render */ "./src/core/render.ts"));
var Main = /** @class */ (function () {
    function Main() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 0;
        this.height = 0;
        this.addBindings();
        this.addListeners();
        this.update();
        this.run();
    }
    Main.prototype.addBindings = function () {
        this.update = this.update.bind(this);
    };
    Main.prototype.addListeners = function () {
        window.addEventListener('resize', this.update);
    };
    Main.prototype.update = function () {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    };
    Main.prototype.run = function () {
        render_1.default(this.ctx, { width: this.width, height: this.height });
    };
    return Main;
}());
new Main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvcmUvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUU5QjtJQU1FO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBNkIsQ0FBQztRQUNwRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0JBQUcsR0FBSDtRQUNFLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFFRCxJQUFJLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5cbmNsYXNzIE1haW4ge1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB0aGlzLndpZHRoID0gMDtcbiAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgdGhpcy5hZGRCaW5kaW5ncygpO1xuICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnJ1bigpO1xuICB9XG5cbiAgYWRkQmluZGluZ3MoKSB7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICByZW5kZXIodGhpcy5jdHgsIHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSk7XG4gIH1cbn1cblxubmV3IE1haW4oKTtcbiJdfQ==

/***/ }),

/***/ "./src/core/render.ts":
/*!****************************!*\
  !*** ./src/core/render.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var cnt = 0;
var render = function (ctx, info) {
    ++cnt;
    console.log(cnt);
    var scrW = info.width, scrH = info.height;
    ctx.clearRect(0, 0, scrW, scrH);
    ctx.strokeStyle = 'rgb(255, 0, 0)';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, cnt, 500);
    requestAnimationFrame(function () { return render(ctx, info); });
    return;
};
exports.default = render;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29yZS9yZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFFWixJQUFNLE1BQU0sR0FBRyxVQUFDLEdBQTZCLEVBQUUsSUFBYztJQUMzRCxFQUFFLEdBQUcsQ0FBQztJQUVOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFVCxJQUFPLElBQUksR0FBbUIsSUFBSSxNQUF2QixFQUFVLElBQUksR0FBSyxJQUFJLE9BQVQsQ0FBVTtJQUUzQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFDbkMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUvQixxQkFBcUIsQ0FBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBRS9DLE9BQU87QUFDVCxDQUFDLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIE1haW5JbmZvID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmxldCBjbnQgPSAwO1xuXG5jb25zdCByZW5kZXIgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGluZm86IE1haW5JbmZvKTogdm9pZCA9PiB7XG4gICsrY250O1xuXG4gIGNvbnNvbGUubG9nKGNudCk7XG5cbiAgY29uc3QgeyB3aWR0aDogc2NyVywgaGVpZ2h0OiBzY3JIIH0gPSBpbmZvO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgc2NyVywgc2NySCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMjU1LCAwLCAwKSc7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBjbnQsIDUwMCk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlbmRlcihjdHgsIGluZm8pKTtcblxuICByZXR1cm47XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iXX0=

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/core/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map