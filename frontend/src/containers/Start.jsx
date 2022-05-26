import React, { useState } from "react";
import Saldo from "../components/CH/Saldo";
import Operations from "../components/Op/Operations";
import TemplateLoad from "../components/TemplateLoad/TemplateLoad";
import axios from "axios";
import { REACT_APP_API } from "../apis";

function Start() {
    const [tabNo, setTabNo] = useState(1);
    const [operations, setOperations] = useState([]);
    const [saldos, setSaldos] = useState([]);
    const [templateFile, setTempateFile] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const sendRequest = () => {
        setIsloading(true);
        let form_data = new FormData();
        form_data.append("operations", JSON.stringify(operations));
        form_data.append("start_data", JSON.stringify(saldos));
        form_data.append("template_file", templateFile, templateFile.name);

        const JSonConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
                // Accept: "application/json",
            },
            responseType: "blob", // important
        };

        axios.post(REACT_APP_API, form_data, JSonConfig).then((res) => {
            console.log("Answer:", res.data);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "Balans.xlsx"); //or any other extension
            document.body.appendChild(link);
            link.click();
            setIsloading(false);
        });
    };

    return (
        <div>
            <div className="container">
                <div className="tabchange my-4 d-flex align-items-center flex-wrap justify-content-between">
                    <div
                        role="button"
                        className={`tablink my-1 fw-bold ${
                            tabNo === 1 ? "text-primary" : ""
                        } `}
                        onClick={() => setTabNo(1)}
                    >
                        1 - Операции
                    </div>
                    <div
                        role="button"
                        className={`tablink my-1 fw-bold ${
                            tabNo === 2 ? "text-primary" : ""
                        } `}
                        onClick={() => setTabNo(2)}
                    >
                        2 - Сальдо начальные
                    </div>
                    <div
                        role="button"
                        className={`tablink my-1 fw-bold ${
                            tabNo === 3 ? "text-primary" : ""
                        } `}
                        onClick={() => setTabNo(3)}
                    >
                        3 - Загрузить шаблон
                    </div>
                </div>
            </div>
            {tabNo === 1 ? (
                <Operations
                    tabNo={tabNo}
                    setTabNo={setTabNo}
                    operations={operations}
                    setOperations={setOperations}
                />
            ) : (
                ""
            )}
            {tabNo === 2 ? (
                <Saldo
                    tabNo={tabNo}
                    setTabNo={setTabNo}
                    saldos={saldos}
                    setSaldos={setSaldos}
                />
            ) : (
                ""
            )}
            {tabNo === 3 ? (
                <>
                    <TemplateLoad
                        templateFile={templateFile}
                        setTemplateFile={setTempateFile}
                    />{" "}
                    <div className="d-flex justify-content-center">
                        <button
                            class="btn btn-primary"
                            onClick={() => sendRequest()}
                            style={{ borderRadius: "5px" }}
                        >
                            ВСЁ
                            {isLoading ? (
                                <div
                                    class="spinner-border spinner-border-sm ms-2"
                                    role="status"
                                >
                                    <span class="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                ""
                            )}
                        </button>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
}

export default Start;
