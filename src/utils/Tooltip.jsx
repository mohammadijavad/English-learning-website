import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useSelector } from "react-redux";
import {
  selectmodeDatepicker,
  selectSteps,
} from "../app/store/Teacher store/Teacher";
function TriggerExample({
  timeMode1,
  timeMode2,
  align,
  children,
  timeCovert,
  text,
}) {
  //['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']
  const mode = useSelector(selectmodeDatepicker);
  const step = useSelector(selectSteps);
  let modeTest = mode === false && step === 2;
  let content = mode ? timeMode2 : modeTest ? timeMode2 : timeMode1;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="d-flex justify-content-center align-content-center flex-column">
        <span> {content}</span>
        <span>{timeCovert}</span>
        <span>{text}</span>
      </div>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement={align}
      delay={{ show: 250, hide: 0 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default TriggerExample;
