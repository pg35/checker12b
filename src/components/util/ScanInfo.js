import { capitalize } from "../../util/general";

export default function ScanInfo(props) {
  const {
    state: {
      scan: { id, type, status, cost },
      app: { balance, sandbox }
    }
  } = props;
  return (
    <div>
      <table className="pxq_pgck_table pxq_pgck_table_info">
        <tbody>
          <tr>
            <th>Type</th>
            <td>{"url" === type ? "URL" : capitalize(type)}</td>
          </tr>
          <tr>
            <th>Input</th>
            <td>{""}</td>
          </tr>
          <tr>
            <th>Sandbox mode</th>
            <td>
              {true === sandbox ? (
                "On"
              ) : (
                <span style={{ color: "red" }}>Off</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      {sandbox && (
        <div>
          <small>
            Sandbox mode shows expected cost.
            <br />
            No credit is charged in sandbox mode.
          </small>
        </div>
      )}
    </div>
  );
}
