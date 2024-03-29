import {Link} from "react-router-dom";
import React from "react";

export function NoMatch() {
    return (
        <div>
            <h2>Такой страницы нет!</h2>
            <p>
                <Link to="/">Вернуться на главную</Link>
            </p>
        </div>
    );
}