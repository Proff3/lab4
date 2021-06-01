import { useState, useEffect } from "react";
import TrucksRow from "./TrucksRow";
import TrucksHead from "./TrucksHead";
import TrucksForm from "./TrucksForm";

function TrucksTable() {
    const [collection, setCollection] = useState();
    const [changeState, setChangeState] = useState(false);
    const [changingRow, setChangingRow] = useState();
    const [updateTable, setUpdateTable] = useState(false);
    useEffect(() => {
        fetch("http://localhost:3001/api/collection/trucks", {
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
            .then((data) => setCollection(data))
            .catch((err) => console.log(err));
    }, [updateTable]);
    console.log(collection);
    if (collection !== undefined) {
        return (
            <div>
                <table className="table">
                    <TrucksHead></TrucksHead>
                    <tbody>
                        {collection.map((item) => (
                            <TrucksRow
                                item={item}
                                setChangeState={setChangeState}
                                setChangingRow={setChangingRow}
                                setUpdateTable={setUpdateTable}
                                key={item.id}
                            ></TrucksRow>
                        ))}
                    </tbody>
                </table>
                <TrucksForm
                    changeState={changeState}
                    setUpdateTable={setUpdateTable}
                    item={changingRow}
                ></TrucksForm>
            </div>
        );
    }
    return <div>Идет загрузка...</div>;
}
export default TrucksTable;
