function Accordion() {
    return (
        <div
            className="accordion"
            id="accordionExample"
            style={{ marginTop: "20px", marginBottom: "20px" }}
        >
            <div className="accordion-item" id="Drivers">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Drivers
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        This page shows drivers. Wheather you need to change or
                        delete row, just do it! To add a new driver, you need to
                        fill the form!
                    </div>
                </div>
            </div>
            <div className="accordion-item" id="Orders">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Orders
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        This page shows orders. Wheather you need to change or
                        delete row, just do it! To add a new order, you need to
                        fill the form!
                    </div>
                </div>
            </div>
            <div className="accordion-item" id="Trucks">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Trucks
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        This page shows trucks. Wheather you need to change or
                        delete row, just do it! To add a new truck, you need to
                        fill the form!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
