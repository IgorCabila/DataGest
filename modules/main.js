const {app, BrowserWindow} = require('electron/main');
const path =  require('node:path');

function createWindow(){
const win = new BrowserWindow({
width: 800,
heigth:600,
webPreferences:{
    preload: path.join(__dirname, 'preload.js'),
    nodeIntegration: true
}
})
win.loadFile('./view/home.html')
}
app.whenReady().then(()=>{
    createWindow()
    app.on('activate',()=>{
        if(BrowserWindow.getAllWindows().lengh === 0){
            createWindow()
        }
    })
})
app.on('window-all-closed',()=>{
    if(process.platform !=='darwin'){
      app.quit()
    }
})