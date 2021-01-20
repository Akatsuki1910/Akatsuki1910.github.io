import React, {FC, useEffect, useRef} from 'react'
import * as PIXI from 'pixi.js'
import Option from './Option'
import Bgobj from './Bgobj'
import p5 from 'p5'
import styles from '../../styles/Background.module.scss'

const Background: FC = () => {
  return (
    <Bgobj />
  )
}

export default Background