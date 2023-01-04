import React from 'react'

function Warning(props) {
  const styles = {
    position: 'absolute',
    top: '10%',
    left: '10%',
    background: props.bg,
    borderRadius: '50%',
    padding: '0px 5px',
    color: '#fff',
    fontSize: '11px',
    lineHeight: '15px',
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={styles}
    >
      <span style={{ color: '#fff', marginTop: '1px' }}>{props.number}</span>
    </div>
  )
}

export default Warning
