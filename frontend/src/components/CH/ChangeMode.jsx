import React, { useState } from "react";

function ChangeMode({ readyItem, index, saldos, setSaldos, setChangeMode }) {
    const [item, setItem] = useState({
        cs: readyItem.cs,
        sum: readyItem.sum,
    });
    const [erors, setErrors] = useState(null);

    const changeSaldo = (e) => {
        e.preventDefault();
        // console.log("IN CHANGE SALDO", saldos);
        if (item.cs.length > 10 && item.sum > 0) {
            const newOperations = [...saldos];
            newOperations[index] = item;
            setSaldos(newOperations);
            setErrors(null);
            setChangeMode(false);
        } else {
            setErrors("Что-то неправильно!");
        }
    };
    return (
        <div className="border p-4 my-3" style={{ borderRadius: "10px" }}>
            {erors ? <h6 className="text-danger text-center">{erors}</h6> : ""}
            <form>
                <div className=" row">
                    <div className="col ">
                        <input
                            type="text"
                            value={item.cs}
                            onChange={(e) =>
                                setItem({
                                    ...item,
                                    cs: e.target.value,
                                })
                            }
                            placeholder="6 212 51 00"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="col-4 ">
                        <input
                            type="number"
                            min={1}
                            value={item.sum}
                            onChange={(e) =>
                                setItem({
                                    ...item,
                                    sum: Number(e.target.value),
                                })
                            }
                            placeholder="500"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            class="btn btn-primary btn-sm"
                            onClick={(e) => changeSaldo(e)}
                            style={{ borderRadius: "5px" }}
                        >
                            <i class="bi bi-save2 "></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChangeMode;
