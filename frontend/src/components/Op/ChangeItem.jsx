import React, { useState } from "react";

function ChangeItem({
    readyItem,
    index,
    operations,
    setOperations,
    setChangeMode,
}) {
    const [item, setItem] = useState({
        Do: readyItem.Do,
        Ko: readyItem.Ko,
        sum: readyItem.sum,
        time: readyItem.time,
        name: readyItem.name,
    });
    const [erors, setErrors] = useState(null);

    const changeOp = (e) => {
        e.preventDefault();
        if (item.Do.length > 10 && item.Ko.length > 10 && item.sum > 0) {
            const newOperations = [...operations];
            newOperations[index] = item;
            setOperations(newOperations);
            setErrors(null);
            setChangeMode(false);
            setItem({ Do: "", Ko: "", sum: 0, time: "", name: "" });
        } else {
            setErrors("Что-то неправильно!");
        }
    };
    return (
        <div className="border p-4 my-2" style={{ borderRadius: "5px" }}>
            <h5 className="text-center">Операция {index + 1}</h5>
            {erors ? (
                <h6
                    className="text-danger text-center"
                    style={{ fontSize: "14px" }}
                >
                    {erors}
                </h6>
            ) : (
                ""
            )}
            <form>
                <div className="d-flex align-items-center justify-content-evenly">
                    <div class="mb-2 me-2">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label
                                    for="do"
                                    style={{ fontSize: "14px" }}
                                    class="col-form-label"
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
                                    placeholder="6 212 51 00"
                                    id="do"
                                    name="do"
                                    class="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label
                                    for="ko"
                                    style={{ fontSize: "14px" }}
                                    class="col-form-label"
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
                                    id="ko"
                                    class="form-control"
                                    name="ko"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 ">
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
                            placeholder="500"
                            class="form-control"
                            id="price"
                            name="price"
                        />
                    </div>
                    <div className="col-6 ">
                        <label
                            for="time"
                            style={{ fontSize: "14px" }}
                            class="form-label"
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
                            class="form-control"
                            id="time"
                            name="time"
                        />
                    </div>
                    <div className="col-12 ">
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
                        onClick={(e) => changeOp(e)}
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

export default ChangeItem;
