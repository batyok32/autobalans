import React from "react";
import OpItem from "./OpItem";
import OpitemForm from "./OpitemForm";

function Operations({ tabNo, setTabNo, operations, setOperations }) {
    return (
        <div className="container">
            <OpitemForm operations={operations} setOperations={setOperations} />
            <hr />
            <div className="row row-cols-1 row-cols-md-3">
                {operations.map((item, index) => (
                    <OpItem
                        key={index}
                        ind={index}
                        item={item}
                        operations={operations}
                        setOperations={setOperations}
                    />
                ))}
            </div>
            <div className="d-flex align-items-center justify-content-end my-5">
                <button
                    className="btn btn-success"
                    style={{ borderRadius: "5px" }}
                    onClick={() => {
                        if (tabNo === 3) {
                            setTabNo(1);
                        } else {
                            setTabNo(tabNo + 1);
                        }
                    }}
                >
                    Дальше <i class="bi bi-arrow-right-short"></i>
                </button>
            </div>
        </div>
    );
}

export default Operations;

// ADD Operation
// REMOVE operation
// SAVE Operation
