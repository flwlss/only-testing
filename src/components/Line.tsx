import React from 'react'

interface ILineProps {
  top?: string;
  right?: string;
  horizontal?: boolean;
}

const Line = (props: ILineProps) => {

  const styles = {
    top: props.top,
    right: props.right,
  }

  return (
    <span
      style={styles}
      className={props.horizontal ? 'horizontalLine' : 'verticalLine'} />
  )
}

export default Line