import React from 'react'
import Line from './Line'
import ColoredLine from './ColoredLine'

interface IContainerProps {
  children: JSX.Element
}

const Container = (props: IContainerProps) => {
  return (
    <>
      <Line />
      <Line right='0' />
      <Line right='720px' />
      <Line top='480px' horizontal />
      <ColoredLine />
      {props.children}
    </>
  )
}

export default Container