import React, { useState } from "react";
import ChangeMode from "./ChangeMode";

function SaldoItem({ item, index, saldos, setSaldos }) {
    const removeItem = () => {
        const newItems = [...saldos];
        newItems.splice(index, 1);
        setSaldos(newItems);
    };
    const [changeMode, setChangeMode] = useState(false);
    return (
        <>
            {changeMode ? (
                <ChangeMode
                    readyItem={item}
                    index={index}
                    saldos={saldos}
                    setSaldos={setSaldos}
                    setChangeMode={setChangeMode}
                />
            ) : (
                // <div className="">Change Mde</div>
                <div className="my-2">
                    <div
                        className=" border p-3 position-relative"
                        style={{ borderRadius: "10px" }}
                    >
                        <div className="fs-6">
                            Счёт <strong>{item.cs}</strong> : {item.sum}
                        </div>
                        <div
                            className="buttonGroup position-absolute"
                            style={{ right: "5px", bottom: "10px" }}
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
                    </div>
                </div>
            )}
        </>
    );
}

export default SaldoItem;
