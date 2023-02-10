import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
function TriggerExample({
  timeMode1,
  timeMode2,
  align,
  children,
  timeCovert,
  mode,
}) {
  //['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="d-flex justify-content-center align-content-center flex-column">
        <span> {mode ? timeMode1 : timeMode2}</span>
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
