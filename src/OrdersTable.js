import { useState, useEffect } from "react";
import OrdersRow from "./OrdersRow";
import OrdersHead from "./OrdersHead";
import OrdersForm from "./OrdersForm";

function OrdersTable() {
    const [orders, setOrders] = useState();
    const [changeState, setChangeState] = useState(false);
    const [changingRow, setChangingRow] = useState();
    const [updateTable, setUpdateTable] = useState(false);
    useEffect(() => {
        fetch("http://localhost:3001/api/collection/orders", {
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
            .then((data) => setOrders(data))
            .catch((err) => console.log(err));
    }, [updateTable]);
    console.log(orders);
    if (orders !== undefined) {
        return (
            <div>
                <table className="table">
                    <OrdersHead></OrdersHead>
                    <tbody>
                        {orders.map((item) => (
                            <OrdersRow
                                item={item}
                                setChangeState={setChangeState}
                                setChangingRow={setChangingRow}
                                setUpdateTable={setUpdateTable}
                                key={item.id}
                            ></OrdersRow>
                        ))}
                    </tbody>
                </table>
                <OrdersForm
                    changeState={changeState}
                    setUpdateTable={setUpdateTable}
                    item={changingRow}
                ></OrdersForm>
            </div>
        );
    }
    return <div>Идет загрузка...</div>;
}
export default OrdersTable;
