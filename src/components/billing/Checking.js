import Request from "../util/Request";
import * as T from "../../reducer/action";

export default function Checking(props) {
  const { state, dispatch } = props;
  const { scan, app } = state;
  return (
    <Request
      useAjaxArgs={{
        ajax: {
          data: {
            action: "pxq_pgck_get_check_credits_result",
            scan_id: scan.id
          }
        },
        repeatCount: 100
      }}
      repeatCount={100}
      onComplete={(data) => {
        if (!data.credits) return;
        dispatch(
          T.createAction(T.SCAN, {
            status: "checked",
            cost: data.credits
          })
        );
      }}
      messages={[
        "Calculating cost",
        "Cost calculated",
        "Cost calculation timed out"
      ]}
    />
  );
}
