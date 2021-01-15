import * as PIXI from 'pixi.js'

export default class Option {
	stage: any
	textWidth: number
	textHeight: number
	textStyle: { fontFamily: string, fontSize: string, fill: string, fontWeight: string }
	textObj: { text: PIXI.Text, score: PIXI.Text }
	constructor(stage: any, text: any, text2: any, i: any) {
		this.stage = stage
		this.textWidth = 240
		this.textHeight = 50
		this.textStyle = {
			fontFamily: 'Arial',
			fontSize: '40px',
			fill: 'white',
			fontWeight: 'bold'
		}
		this.textObj = {
			text: null,
			score: null,
		}
		this.textAdd(text, text2, i)
	}

	textAdd(text: string, text2: string, i: number) {
		this.textObj.text = new PIXI.Text(text, this.textStyle)
		this.textObj.text.y = this.textHeight * i
		this.stage.addChild(this.textObj.text)

		this.textObj.score = new PIXI.Text(text2, this.textStyle)
		this.textObj.score.x = this.textWidth
		this.textObj.score.y = this.textHeight * i
		this.stage.addChild(this.textObj.score)
	}
}