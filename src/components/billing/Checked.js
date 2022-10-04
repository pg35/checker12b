import Request from "../util/Request";
import * as T from "../../reducer/action";

export default function Checked(props) {
  const { state, dispatch } = props;
  const { scan, app } = state;
  const classes = ["bold"];
  if (scan.cost > app.balance) classes.push("error");
  else classes.push("success");
  return (
    <table className="pxq_pgck_table pxq_pgck_table_info">
      <tbody>
        <tr>
          <th>Your credits</th>
          <td>{app.balance}</td>
        </tr>
        <tr>
          <th>Plagiarism check cost</th>
          <td
            style={{ fontWeight: "bold" }}
            className={classes.map((x) => `pxq_pgck_${x}`).join(" ")}
          >
            {scan.cost}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
