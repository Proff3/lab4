function OrdersHead() {
    return (
        <thead>
            <tr style={{ textAlign: "center" }}>
                <th scope="col">#</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Mileage</th>
                <th scope="col">Change</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
    );
}
export default OrdersHead;
