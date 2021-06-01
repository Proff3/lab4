import { useState, useEffect } from "react";
import DriversRow from "./DriversRow";
import DriversHead from "./DriversHead";
import DriversForm from "./DriversForm";

function DriversTable() {
    const [drivers, setDrivers] = useState();
    const [changeState, setChangeState] = useState(false);
    const [changingRow, setChangingRow] = useState();
    const [updateTable, setUpdateTable] = useState(false);
    useEffect(() => {
        fetch("http://localhost:3001/api/collection/drivers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => {
                console.log(res);
                setUpdateTable(false);
                return res.json();
            })
            .then((data) => setDrivers(data))
            .catch((err) => console.log(err));
    }, [updateTable]);
    console.log(drivers);
    if (drivers !== undefined) {
        return (
            <div>
                <table className="table">
                    <DriversHead></DriversHead>
                    <tbody>
                        {drivers.map((item) => (
                            <DriversRow
                                item={item}
                                setChangeState={setChangeState}
                                setChangingRow={setChangingRow}
                                setUpdateTable={setUpdateTable}
                                key={item.id}
                            ></DriversRow>
                        ))}
                    </tbody>
                </table>
                <DriversForm
                    changeState={changeState}
                    setUpdateTable={setUpdateTable}
                    item={changingRow}
                ></DriversForm>
            </div>
        );
    }
    return <div>Идет загрузка...</div>;
}
export default DriversTable;
