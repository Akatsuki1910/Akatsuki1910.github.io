import React, {FC, useEffect, useRef} from 'react'
import * as PIXI from 'pixi.js'
import Option from './Option'
import styles from '../../styles/Background.module.scss'

const Background: FC = () => {
	const canvasRef = useRef(null)
	const width = window.innerWidth
	const height = window.innerHeight
	const stage = new PIXI.Container()
	const renderer = PIXI.autoDetectRenderer({
		width: width,
		height: height,
		resolution: 1,
		antialias: true,
		backgroundColor: 0x00ffd4
		// transparent: true,
	})

	const unmount = () => {
    if (!canvasRef.current) return;
    while (canvasRef.current.firstChild) {
      canvasRef.current.removeChild(canvasRef.current.firstChild)
    }
  }

  const getContext = () => {
    return canvasRef.current
	}

  useEffect(() => {
		if (!canvasRef.current) return
    const ctx = getContext()
		ctx.appendChild(renderer.view)
		// const TO_enemyHP = new Option(stage, 'EHP', 0, 0)
		animation()
		return unmount
	},[])

	const animation = () => {
		renderer.render(stage)
		requestAnimationFrame(animation)
	}

  return (
    <div ref={canvasRef} className={styles.canvas}/>
  )
}

export default Background