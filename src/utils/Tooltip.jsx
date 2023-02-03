import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

function TriggerExample({ text, align, children }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  )

  return (
    <OverlayTrigger
      placement={align}
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  )
}

export default TriggerExample
