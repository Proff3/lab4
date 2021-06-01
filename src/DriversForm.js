function DriversForm({ changeState, item, setUpdateTable }) {
    function handleChange(event) {
        event.preventDefault();
        let bodyTable = {};
        bodyTable.name = event.target.elements.name.value;
        bodyTable.surname = event.target.elements.surname.value;
        bodyTable.number = event.target.elements.number.value;
        console.log(bodyTable);
        let method = "PUT";
        if (changeState) {
            method = "POST";
            bodyTable.id = item.id;
        }
        fetch("http://localhost:3001/api/collection/drivers", {
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
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        defaultValue={item.name}
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Surname
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="surname"
                        aria-describedby="emailHelp"
                        defaultValue={item.surname}
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="number"
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
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    defaultValue={""}
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Surname
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="surname"
                    aria-describedby="emailHelp"
                    defaultValue={""}
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Number
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="number"
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
export default DriversForm;
