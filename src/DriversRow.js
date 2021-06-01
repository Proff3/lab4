import changeIcon from "./icons/gear.png";
import deleteIcon from "./icons/trash.png";

function DriversRow({ item, setChangeState, setChangingRow, setUpdateTable }) {
    function handleChange() {
        setChangingRow(item);
        setChangeState((prevState) => !prevState);
    }

    function handleDelete() {
        fetch("http://localhost:3001/api/collection/drivers", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ id: item.id }),
        }).then(setUpdateTable());
    }
    return (
        <tr style={{ textAlign: "center" }}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.number}</td>
            <td className="change cursor" onClick={handleChange}>
                <img src={changeIcon} alt="change"></img>
            </td>
            <td className="delete cursor" onClick={handleDelete}>
                <img src={deleteIcon} alt="delete"></img>
            </td>
        </tr>
    );
}
export default DriversRow;
