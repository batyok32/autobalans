import React from "react";
import SaldoForm from "./SaldoForm";
import SaldoItem from "./SaldoItem";

function Saldo({ tabNo, setTabNo, saldos, setSaldos }) {
    return (
        <div className="container">
            {/* Form */}
            <SaldoForm saldos={saldos} setSaldos={setSaldos} />
            <hr />
            {saldos.map((item, index) => (
                <SaldoItem
                    item={item}
                    index={index}
                    saldos={saldos}
                    setSaldos={setSaldos}
                />
            ))}
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

export default Saldo;
