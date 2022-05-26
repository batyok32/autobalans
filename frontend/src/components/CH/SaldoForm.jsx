import React, { useState } from "react";

function SaldoForm({ saldos, setSaldos }) {
    const [item, setItem] = useState({
        cs: "",
        sum: 0,
    });
    const [erors, setErrors] = useState(null);
    const addSaldo = (e) => {
        e.preventDefault();
        // Check
        if (item.cs.length > 10 && item.sum > 0) {
            const newSaldos = [...saldos, item];
            setSaldos(newSaldos);
            // console.log(newOperations);
            setErrors(null);
            setItem({ cs: "", sum: 0 });
        } else {
            setErrors("Что-то неправильно!");
        }
    };
    return (
        <div className=" p-4" style={{ borderRadius: "10px" }}>
            <h3 className="mb-4 text-center">Счёт {saldos.length + 1}</h3>
            {erors ? <h6 className="text-danger text-center">{erors}</h6> : ""}
            <form>
                <div className="mb-3 row">
                    <div className="col-6 ">
                        <label
                            for="scet"
                            class="form-label"
                            style={{ fontSize: "14px" }}
                        >
                            Счёт
                        </label>
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
                            id="scet"
                            name="scet"
                        />
                    </div>
                    <div className="col-6 ">
                        <label
                            for="sum"
                            class="form-label"
                            style={{ fontSize: "14px" }}
                        >
                            Сумма
                        </label>
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
                            id="sum"
                            name="sum"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        class="btn btn-primary btn-sm"
                        onClick={(e) => addSaldo(e)}
                        style={{ borderRadius: "5px" }}
                    >
                        Сохранить
                        <i class="bi bi-save2 ms-2"></i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SaldoForm;
