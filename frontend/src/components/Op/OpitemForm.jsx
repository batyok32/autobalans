import React, { useState } from "react";

function OpitemForm({ operations, setOperations }) {
    const [item, setItem] = useState({
        Do: "",
        Ko: "",
        sum: 0,
        time: "",
        name: "",
    });
    const [erors, setErrors] = useState(null);
    const addOp = (e) => {
        e.preventDefault();
        // Check
        if (item.Do.length > 10 && item.Ko.length > 10 && item.sum > 0) {
            const newOperations = [...operations, item];
            setOperations(newOperations);
            console.log(newOperations);

            setErrors(null);
            setItem({ Do: "", Ko: "", sum: 0, time: "", name: "" });
        } else {
            setErrors("Что-то неправильно!");
        }
    };

    return (
        <div className="  " style={{ borderRadius: "10px" }}>
            <h3 className="mb-5 text-center">
                Операция {operations.length + 1}
            </h3>
            {erors ? <h6 className="text-danger text-center">{erors}</h6> : ""}
            <form>
                {/* Do, Ko, SUM, Time, Description */}
                <div className="d-flex align-items-center justify-content-evenly">
                    <div class="mb-3 me-2">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label
                                    for="do"
                                    class="col-form-label"
                                    style={{ fontSize: "14px" }}
                                >
                                    Do
                                </label>
                            </div>
                            <div class="col-auto">
                                <input
                                    type="text"
                                    value={item.Do}
                                    onChange={(e) =>
                                        setItem({ ...item, Do: e.target.value })
                                    }
                                    name="Do"
                                    placeholder="6 212 51 00"
                                    id="do"
                                    class="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label
                                    for="ko"
                                    class="col-form-label"
                                    style={{ fontSize: "14px" }}
                                >
                                    Kт
                                </label>
                            </div>
                            <div class="col-auto">
                                <input
                                    type="text"
                                    value={item.Ko}
                                    onChange={(e) =>
                                        setItem({ ...item, Ko: e.target.value })
                                    }
                                    placeholder="6 212 55 00"
                                    name="Ko"
                                    id="ko"
                                    class="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6 col-md-3">
                        <label
                            for="price"
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
                            name="price"
                            placeholder="500"
                            class="form-control"
                            id="price"
                        />
                    </div>
                    <div className="col-6 col-md-3">
                        <label
                            for="time"
                            class="form-label"
                            style={{ fontSize: "14px" }}
                        >
                            Время
                        </label>
                        <input
                            placeholder="12.01.2022"
                            type="text"
                            value={item.time}
                            onChange={(e) =>
                                setItem({ ...item, time: e.target.value })
                            }
                            name="time"
                            class="form-control"
                            id="time"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <label
                            for="opname"
                            class="form-label"
                            style={{ fontSize: "14px" }}
                        >
                            Имя операции
                        </label>
                        <input
                            placeholder="Добрые глаза"
                            type="text"
                            value={item.name}
                            onChange={(e) =>
                                setItem({ ...item, name: e.target.value })
                            }
                            class="form-control"
                            id="opname"
                            name="opname"
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button
                        class="btn btn-primary btn-sm"
                        onClick={(e) => addOp(e)}
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

export default OpitemForm;
