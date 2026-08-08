const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 350,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on("window-minimize", () => {
  mainWindow.minimize();
});

ipcMain.on("window-close", () => {
  mainWindow.close();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});