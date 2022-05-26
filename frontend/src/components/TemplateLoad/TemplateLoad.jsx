import React from "react";
import { DJANGO_API } from "../../apis";

function TemplateLoad({ templateFile, setTemplateFile }) {
    const fileChange = (e) => {
        setTemplateFile(e.target.files[0]);
    };

    return (
        <div className="container">
            <h3>Инструкция</h3>
            <ol className="my-4">
                <li>
                    Шаблон должет быть вот в таком формате:{" "}
                    <a href={`${DJANGO_API}/media/spisok.xlsx`}>
                        cкачать шаблон
                    </a>
                </li>
                <li>
                    Не должны менятся столбцы, вы можете добавлять новые счёта,
                    удалять не нужные, но не трогайте столбцы
                </li>
            </ol>
            <div class="input-group mb-3">
                <input
                    type="file"
                    class="form-control"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    id="inputGroupFile01"
                    onChange={(e) => fileChange(e)}
                />
            </div>
        </div>
    );
}

export default TemplateLoad;
