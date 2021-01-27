/**
 * useLayoutEffect
 * useLayoutEffect要比useEffect更早的触发执行
 * useLayoutEffect会阻塞浏览器渲染，切记执行同步的耗时操作
 * 这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能会出现出现闪屏问题,
 * useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制
 *
 */

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import TweenMax from 'gsap'

const Animate = () => {
  const REl1 = useRef(null)
  const REl2 = useRef(null)
  useEffect(() => {
    /*下面这段代码的意思是当组件加载完成后,在0秒的时间内,将方块的横坐标位置移到600px的位置*/
    /*会闪屏*/
    TweenMax.to(REl1.current, 0, { x: 600 })
  }, [])
  useLayoutEffect(() => {
    /*不会闪屏 因为useLayoutEffect会阻塞浏览器的渲染*/
    TweenMax.to(REl2.current, 0, { x: 600 })
  }, [])
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <div
        ref={REl1}
        style={{ width: '200px', height: '200px', backgroundColor: 'red' }}
      >
        square1
      </div>
      <div
        ref={REl2}
        style={{ width: '200px', height: '200px', backgroundColor: 'green' }}
      >
        square2
      </div>
    </div>
  )
}

export default Animate