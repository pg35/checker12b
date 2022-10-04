import Request from "../util/Request";
import * as T from "../../reducer/action";

function getInput(type, rawInput) {
  return "this is a long text to check for the credit check this is along text";
  return rawInput.input;
}

export default function Check(props) {
  const { state, dispatch } = props;
  const { scan, app } = state;
  return (
    <Request
      useAjaxArgs={{
        ajax: {
          method: "POST",
          data: {
            action: "pxq_pgck_check_credits",
            text: getInput(scan, state[`${scan.type}Input`]),
            type: scan.type,
            sandbox: app.sandbox
          }
        }
      }}
      onComplete={(data) =>
        dispatch(
          T.createAction(T.SCAN, {
            id: data.scan_id,
            status: "checking"
          })
        )
      }
      messages={[
        "Requesting cost calculation",
        "Cost calculation request submitted",
        "Cost calculation request failed"
      ]}
    />
  );
}
