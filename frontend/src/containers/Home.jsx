import React from "react";
import { DJANGO_API } from "../apis";
import Big from "../components/Big";

function Home() {
    return (
        <div>
            <Big />
            <div className="instructions">
                <div className="text-center my-5">
                    <h1 className="">Инструкция</h1>
                    <p>Баланс за 3 этапа</p>
                </div>
                <div className="container">
                    <ol>
                        <li className="fs-3 my-2">Вставьте операции</li>
                        <li className="fs-3 my-2">
                            Вставьте сальдо начальные счетов
                        </li>
                        <li className="fs-3">
                            <div className="fs-3">Загрузите список счетов</div>
                            <p className="fs-6">
                                Вот в таком формате:{" "}
                                <a href={`${DJANGO_API}/media/spisok.xlsx`}>
                                    Скачать шаблон
                                </a>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            {/* ANOTHER PAGE */}
            {/* <div>4 TABS: OPERATIONS, SALDO STARTS, TEMPLATE, FINISHED</div>
            <div>BUTTON FOR IMPORT EXPORT PROFILE</div>
            <div>OPERATIONS: Do, Ko, SUM, Time, Description</div>
            <div>Saldo Starts: SCET, Sum</div>
            <div>Template: Import template</div>
            <div>Finished</div> */}
        </div>
    );
}

export default Home;
