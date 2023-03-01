import React from "react";

export default function News(props) {
    const num = 25
  return (
    <div className="block-top">
        <section className="block-news">
            <div className="block-tittle">Заголовок новостей</div>
            <ul className="block-list">
                <li>{props.news}</li>
                <li>{props.news}</li>
                <li>{props.news}</li>
                <li>{props.news}</li>
                <li>{props.news}</li>
                <li>{props.news}</li>
            </ul>
            <div className="block-currency">Курс валют</div>
        </section>
        <section className="block-advertisement">
            <div>{props.text}</div>
        </section>

    </div>
  )
}
