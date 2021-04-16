import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  console.log(isDev);

  win.loadURL(
    isDev ? "http://localhost:9000" : `file://${app.getAppPath()}/index.html`
  );
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
