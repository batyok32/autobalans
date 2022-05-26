import React, { useState } from "react";
import ChangeItem from "./ChangeItem";

function OpItem({ ind, item, operations, setOperations }) {
    const removeItem = () => {
        const newItems = [...operations];
        newItems.splice(ind, 1);
        setOperations(newItems);
    };
    const [changeMode, setChangeMode] = useState(false);
    return (
        <>
            {changeMode ? (
                <ChangeItem
                    readyItem={item}
                    index={ind}
                    operations={operations}
                    setOperations={setOperations}
                    setChangeMode={setChangeMode}
                />
            ) : (
                <div className="my-2">
                    <div
                        className=" border p-4 position-relative"
                        style={{ borderRadius: "5px" }}
                    >
                        <h6>
                            {ind + 1}. {item.name} - {item.sum}
                        </h6>
                        <div
                            className="buttonGroup position-absolute"
                            style={{ right: "15px", bottom: "15px" }}
                        >
                            <button
                                onClick={() => removeItem()}
                                className="btn btn-danger me-2 btn-sm"
                            >
                                <i class="bi bi-trash"></i>
                            </button>
                            <button
                                onClick={() => setChangeMode(true)}
                                className="btn btn-warning btn-sm"
                            >
                                <i class="bi bi-pencil"></i>
                            </button>
                        </div>
                        <div className="px-4 my-3">
                            <div className="fs-6 mb-1">
                                <span className="fw-bold me-1">Do</span>{" "}
                                {item.Do}
                            </div>
                            <div className="ms-4 fs-6">
                                <span className="fw-bold me-1">Ko</span>{" "}
                                {item.Ko}
                            </div>
                        </div>
                        <p className="text-muted fst-italic small">
                            {item.time}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default OpItem;
