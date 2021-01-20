import React, {FC, useEffect, useRef} from 'react'
import p5 from "p5"
import styles from '../../styles/Bgobj.module.scss'

const Bgobj: FC = () => {
	const renderRef = useRef(null)
	const drawCanvas = (p: p5) => {
		p.setup = () => {
			p.createCanvas(p.windowWidth, p.windowHeight).parent(renderRef.current);
		}
		p.draw = () => {
			p.ellipse(50, 50, 80, 80)
		}
	}

	useEffect(() => {
		if (!renderRef.current) return
		new p5(drawCanvas)
	},[])
	return (
		<div className={styles.canvasWrapper}>
			<div ref={renderRef} className={styles.canvas}/>
		</div>
	)
}

export default Bgobj