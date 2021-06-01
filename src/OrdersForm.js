function OrdersForm({ changeState, item, setUpdateTable }) {
    function handleChange(event) {
        event.preventDefault();
        let bodyTable = {};
        bodyTable.from = event.target.elements.from.value;
        bodyTable.to = event.target.elements.to.value;
        bodyTable.mileage = event.target.elements.mileage.value;
        console.log(bodyTable);
        let method = "PUT";
        if (changeState) {
            method = "POST";
            bodyTable.id = item.id;
        }
        fetch("http://localhost:3001/api/collection/orders", {
            method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(bodyTable),
        })
            .then(setUpdateTable(true))
            .catch((err) => console.log(err));
    }

    if (changeState) {
        return (
            <form onSubmit={handleChange}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        From
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="from"
                        aria-describedby="emailHelp"
                        defaultValue={item.name}
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        To
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="to"
                        aria-describedby="emailHelp"
                        defaultValue={item.surname}
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Mileage
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="mileage"
                        aria-describedby="emailHelp"
                        defaultValue={item.surname}
                    ></input>
                </div>
                <button type="submit" className="btn btn-primary">
                    Change
                </button>
            </form>
        );
    }
    return (
        <form onSubmit={handleChange}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    From
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="from"
                    aria-describedby="emailHelp"
                    defaultValue={""}
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    To
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="to"
                    aria-describedby="emailHelp"
                    defaultValue={""}
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Mileage
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="mileage"
                    aria-describedby="emailHelp"
                    defaultValue={""}
                ></input>
            </div>
            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    );
}
export default OrdersForm;
