import React from 'react'

export default function Input() {
  return (
    <div>
        <div>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li>Видео</li>
                    <li>Картинки</li>
                    <li>Новости</li>
                    <li>Карты</li>
                    <li>Маркет</li>
                    <li>Переводчик</li>
                    <li>Эфир</li>
                    <li>еще</li>
                </ul>
            </nav>
        </div>
        
        <div className='block-input'>
            <div className='logo'>Логотип</div>
            <input className='input'></input>
            <button className='button'>Найти</button>
        </div>
        <div>Найдется все.Например...</div>
    </div>
  )
}
