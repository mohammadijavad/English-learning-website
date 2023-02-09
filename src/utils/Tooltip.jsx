import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import persianDate from 'persian-date'
function TriggerExample({
  text,
  align,
  children,
  timeCovert,
  weekName,
  todayDate,
  monthName,
}) {
  const spltTime = text.split(':')
  const [hour, minutes] = spltTime
  //['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']
  const hourrTime = new persianDate([, , , hour, minutes, ,])
    .toLocale('en')
    .format('H:mm')
  // const addOnhour = new persianDate([, , , hour, minutes, ,])
  //   .add('minutes', 60)
  //   .toLocale('en')
  //   .format('H:mm')
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="d-flex justify-content-center align-content-center flex-column">
        <span> {hourrTime}</span>
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
