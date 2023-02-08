import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

function TriggerExample({ text, align, children, timeCovert }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="d-flex justify-content-center align-content-center flex-column">
        <span>{text}</span>
        <span>{timeCovert}</span>
      </div>
    </Tooltip>
  )

  return (
    <OverlayTrigger
      placement={align}
      delay={{ show: 250, hide: 0 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  )
}

export default TriggerExample
