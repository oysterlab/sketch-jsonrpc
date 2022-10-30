/// <reference types="sketch-app-types" />

import { createPluginAPI, createUIAPI } from '@sketch-jsonrpc'
import sketch from 'sketch'
import { Subject } from 'rxjs'

export const api = createPluginAPI({
	changeLayerColor(color: string, layerId:string) {
		const layer = sketch.getSelectedDocument()?.getLayerWithID(layerId)
		if (layer) {
			(layer as any).style.fills = [{ color }];
		}
	}
})

export const $currentLayerId = new Subject()

export const uiApi = createUIAPI({
	updateCurrentLayerId: (id:string) => {
		$currentLayerId.next(id)
	}
})