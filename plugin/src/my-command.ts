/// <reference types="sketch-app-types" />
import { ui } from '@sketch-jsonrpc'
import sketch from 'sketch'

import { uiApi } from './rpc'

export default function () {}

export function onSelctionChange() {
  if (sketch.getSelectedDocument() && sketch.getSelectedDocument()?.selectedLayers.layers[0]) {
    ui.show()
    uiApi.updateCurrentLayerId(sketch.getSelectedDocument()?.selectedLayers.layers[0].id || '')
  } else {
    ui.hide()
  }
}

export function onOpenDocument() {
  ui.showUI('http://localhost:3000', false)
  ui.resize(200, 200)
}

