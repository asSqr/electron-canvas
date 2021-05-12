"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
var win;
// セキュアな Electron の構成
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436
var createWindow = function () {
    // レンダープロセスとなる、ウィンドウオブジェクトを作成する。
    win = new electron_1.BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            contextIsolation: true,
            preload: path_1.default.join(__dirname, './core/preLoad.js'),
        },
    });
    // 読み込む index.html。
    // tsc でコンパイルするので、出力先の dist の相対パスで指定する。
    win.loadFile(path_1.default.join(__dirname, './index.html'));
    if (process.argv.find(function (arg) { return arg === '--debug'; })) {
        win.webContents.openDevTools();
    }
    // ブラウザウィンドウを閉じたときのイベントハンドラ
    win.on('closed', function () {
        // 閉じたウィンドウオブジェクトにはアクセスできない
        win = null;
    });
};
// Electronの起動準備が終わったら、ウィンドウを作成する。
electron_1.app.whenReady().then(createWindow);
// すべての ウィンドウ が閉じたときの処理
electron_1.app.on('window-all-closed', function () {
    // macOS 以外では、メインプロセスを停止する
    // macOS では、ウインドウが閉じてもメインプロセスは停止せず
    // ドックから再度ウインドウが表示されるようにする。
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // macOS では、ウインドウが閉じてもメインプロセスは停止せず
    // ドックから再度ウインドウが表示されるようにする。
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBOEM7QUFDOUMsOENBQXdCO0FBRXhCLElBQUksR0FBRyxDQUFDO0FBRVIscUJBQXFCO0FBQ3JCLDJEQUEyRDtBQUUzRCxJQUFNLFlBQVksR0FBRztJQUNuQixnQ0FBZ0M7SUFDaEMsR0FBRyxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUN0QixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLEtBQUs7WUFDdEIsdUJBQXVCLEVBQUUsS0FBSztZQUM5QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztTQUNuRDtLQUNGLENBQUMsQ0FBQztJQUVILG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRW5ELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssU0FBUyxFQUFqQixDQUFpQixDQUFDLEVBQUU7UUFDL0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNoQztJQUVELDJCQUEyQjtJQUMzQixHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNmLDJCQUEyQjtRQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixrQ0FBa0M7QUFDbEMsY0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUVuQyx1QkFBdUI7QUFDdkIsY0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2pDLGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNqQixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLElBQUksd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlDLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxubGV0IHdpbjtcblxuLy8g44K744Kt44Ol44Ki44GqIEVsZWN0cm9uIOOBruani+aIkFxuLy8g5Y+C6ICDOiBodHRwczovL3FpaXRhLmNvbS9wb2NobWFuL2l0ZW1zLzY0YjM0ZTk4Mjc4NjY2NjRkNDM2XG5cbmNvbnN0IGNyZWF0ZVdpbmRvdyA9ICgpOiB2b2lkID0+IHtcbiAgLy8g44Os44Oz44OA44O844OX44Ot44K744K544Go44Gq44KL44CB44Km44Kj44Oz44OJ44Km44Kq44OW44K444Kn44Kv44OI44KS5L2c5oiQ44GZ44KL44CCXG4gIHdpbiA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgbm9kZUludGVncmF0aW9uOiBmYWxzZSxcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbkluV29ya2VyOiBmYWxzZSxcbiAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWUsXG4gICAgICBwcmVsb2FkOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jb3JlL3ByZUxvYWQuanMnKSxcbiAgICB9LFxuICB9KTtcblxuICAvLyDoqq3jgb/ovrzjgoAgaW5kZXguaHRtbOOAglxuICAvLyB0c2Mg44Gn44Kz44Oz44OR44Kk44Or44GZ44KL44Gu44Gn44CB5Ye65Yqb5YWI44GuIGRpc3Qg44Gu55u45a++44OR44K544Gn5oyH5a6a44GZ44KL44CCXG4gIHdpbi5sb2FkRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9pbmRleC5odG1sJykpO1xuXG4gIGlmIChwcm9jZXNzLmFyZ3YuZmluZChhcmcgPT4gYXJnID09PSAnLS1kZWJ1ZycpKSB7XG4gICAgd2luLndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xuICB9XG5cbiAgLy8g44OW44Op44Km44K244Km44Kj44Oz44OJ44Km44KS6ZaJ44GY44Gf44Go44GN44Gu44Kk44OZ44Oz44OI44OP44Oz44OJ44OpXG4gIHdpbi5vbignY2xvc2VkJywgKCkgPT4ge1xuICAgIC8vIOmWieOBmOOBn+OCpuOCo+ODs+ODieOCpuOCquODluOCuOOCp+OCr+ODiOOBq+OBr+OCouOCr+OCu+OCueOBp+OBjeOBquOBhFxuICAgIHdpbiA9IG51bGw7XG4gIH0pO1xufTtcblxuLy8gRWxlY3Ryb27jga7otbfli5XmupblgpnjgYzntYLjgo/jgaPjgZ/jgonjgIHjgqbjgqPjg7Pjg4njgqbjgpLkvZzmiJDjgZnjgovjgIJcbmFwcC53aGVuUmVhZHkoKS50aGVuKGNyZWF0ZVdpbmRvdyk7XG5cbi8vIOOBmeOBueOBpuOBriDjgqbjgqPjg7Pjg4njgqYg44GM6ZaJ44GY44Gf44Go44GN44Gu5Yem55CGXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICAvLyBtYWNPUyDku6XlpJbjgafjga/jgIHjg6HjgqTjg7Pjg5fjg63jgrvjgrnjgpLlgZzmraLjgZnjgotcbiAgLy8gbWFjT1Mg44Gn44Gv44CB44Km44Kk44Oz44OJ44Km44GM6ZaJ44GY44Gm44KC44Oh44Kk44Oz44OX44Ot44K744K544Gv5YGc5q2i44Gb44GaXG4gIC8vIOODieODg+OCr+OBi+OCieWGjeW6puOCpuOCpOODs+ODieOCpuOBjOihqOekuuOBleOCjOOCi+OCiOOBhuOBq+OBmeOCi+OAglxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpO1xuICB9XG59KTtcblxuYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgLy8gbWFjT1Mg44Gn44Gv44CB44Km44Kk44Oz44OJ44Km44GM6ZaJ44GY44Gm44KC44Oh44Kk44Oz44OX44Ot44K744K544Gv5YGc5q2i44Gb44GaXG4gIC8vIOODieODg+OCr+OBi+OCieWGjeW6puOCpuOCpOODs+ODieOCpuOBjOihqOekuuOBleOCjOOCi+OCiOOBhuOBq+OBmeOCi+OAglxuICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgY3JlYXRlV2luZG93KCk7XG4gIH1cbn0pO1xuIl19