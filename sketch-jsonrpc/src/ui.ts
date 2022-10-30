import { WEBVIEW_ID } from './rpc'
import BrowserWindow from 'sketch-module-web-view'
import settings from 'sketch/settings'

const WEBVIEW_INFO = 'WebviewInfo'
interface WebviewInfo {
  url:string
  width:number
  height:number
}

export function showUI(url:string, visible:boolean = false) {
  let webview = getWebview()

  if (!webview) {
    webview = new BrowserWindow({
      identifier: WEBVIEW_ID,
      width: 1,
      height: 1,
      show: false
    })
  } else {
    webview.setSize(1, 1, false)
  }

  webview.loadURL(url)

  _storeUrlInfo(url)
  _restoreSize();
  (visible ? show() : hide());
}

export function show() {
  const webview = getWebview();
  if (webview) {
    if (webview.webContents.getURL() == 'null') {
      const { url } = settings.sessionVariable(WEBVIEW_INFO) || {} as WebviewInfo;
      (url && showUI(url, true)); 
    } else {
      webview.showInactive()
    }
  }
}

export function getWebview() {
  const remote = require('sketch-module-web-view/remote')
  return remote.getWebview(WEBVIEW_ID)
}

export function hide() {
  const webview = getWebview();
  (webview && webview.hide())
}

export function resize(width:number, height:number) {
  const webview = getWebview();
  (webview && webview.setSize(width, height, false));
  _storeResizeInfo(width, height)
}

export function close() {
  const webview = getWebview();
  (webview && webview.close())
}

function _storeResizeInfo(width:number, height:number) {
  const webviewInfo = settings.sessionVariable(WEBVIEW_INFO) || {} as WebviewInfo
  settings.setSessionVariable(WEBVIEW_INFO, {
    ...webviewInfo,
    width,
    height
  });
}

function _storeUrlInfo(url:string) {
  const webviewInfo = settings.sessionVariable(WEBVIEW_INFO) || {} as WebviewInfo
  settings.setSessionVariable(WEBVIEW_INFO, {
    ...webviewInfo,
    url
  });
}

function _restoreSize() {
  const webviewInfo = settings.sessionVariable(WEBVIEW_INFO) || {} as WebviewInfo
  if (webviewInfo.width && webviewInfo.height) {
    resize(webviewInfo.width, webviewInfo.height)
  }
}