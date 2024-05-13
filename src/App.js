import "./reset.css";
import "./App.css";
import search from "./images/search.svg";
import data from "./data";
import { useState } from "react";
import { useEffect } from "react";
import work from "./images/work.svg";
import calendar from "./images/calendar.svg";

function App() {
  const [vacancyList, setVacancyList] = useState([]);
  useEffect(() => {
    setVacancyList(data);
  }, []);

  const [showAll, setShowAll] = useState(false);

  const handleClickShowMore = () => {
    setShowAll(true);
  };

  const handleClickShowLess = () => {
    setShowAll(false);
  };
  return (
    <>
      <header id="main">
        <div className="header__main">
          <a href="#main">Главная</a>
          <div className="search">
            <input placeholder="Поиск..." />
            <img src={search} />
          </div>
        </div>
        <div className="header__create_resume">
          <button>
            <a href="#resume">Создать резюме</a>
          </button>
        </div>
        <div className="header__contacts">
          <a href="#resume">Контакты</a>
          <a href="#feedback">Обратная связь</a>
        </div>
      </header>
      <main className="slider"></main>

      <main className="vacancy">
        <div className="vacancy__container">
          <div className="vacancy__header">
            <h2>Вакансии</h2>
            <div className="search">
              <input placeholder="Поиск..." />
              <img src={search} alt="search icon" />
            </div>
            <ul className="vacancy__list">
              {vacancyList.map((elem, index) => (
                <li
                  key={elem.id || index}
                  className="vacancy__item"
                  style={{ display: showAll || index < 4 ? "block" : "none" }}
                >
                  <h2>{elem.position}</h2>
                  <h3>{elem.company}</h3>
                  <h4>{elem.location}</h4>
                  <h5>
                    <img src={work} alt="work icon" /> {elem.experience}
                  </h5>
                  <h6>
                    <img src={calendar} alt="calendar icon" /> {elem.employment}
                  </h6>
                </li>
              ))}
            </ul>
            {!showAll && vacancyList.length > 4 && (
              <button onClick={handleClickShowMore} className="show__vacancy">
                Показать еще
              </button>
            )}
            {showAll && (
              <button onClick={handleClickShowLess} className="close__vacancy">
                Скрыть вакансии
              </button>
            )}
          </div>
        </div>
      </main>
      <main className="resume" id="resume">
        <div className="resume__container">
          <h2>Резюме</h2>
          <form className="resume__list">
            <div className="resume__item">
              <p>Имя</p>
              <input placeholder="Имя" />
            </div>
            <div className="resume__item">
              <p>Дата рождения</p>
              <input placeholder="Дата рождения" />
            </div>
            <div className="resume__item">
              <p>Фамилия</p>
              <input placeholder="Фамилия" />
            </div>
            <div className="resume__item">
              <p>Образование</p>
              <input placeholder="Образование" />
            </div>
            <div className="resume__item">
              <p>Отчество</p>
              <input placeholder="Отчество" />
            </div>
            <div className="resume__item">
              <p>Должность</p>
              <input placeholder="Должность" />
            </div>
          </form>
          <button>Отправить резюме</button>
        </div>
        <div className="resume__description">
          <h2>Заполните форму и отправьте</h2>
          <p>Заполните следующую форму, чтобы отправить свое резюме</p>
        </div>
      </main>

      <main className="feedback" id="feedback">
        <div className="feedback__description">
          <h2>Обратная связь</h2>
          <p>Заполните следующую форму, чтобы отправить текст</p>
        </div>
        <div className="feedback__container">
          <h2>Обратная связь</h2>
          <form className="feedback__list">
            <div className="feedback__item">
              <p>Имя</p>
              <input placeholder="Имя" />
            </div>
            <div className="feedback__item">
              <p>Фамилия</p>
              <input placeholder="Фамилия" />
            </div>
            <div className="feedback__item">
              <p>Отчество</p>
              <input placeholder="Отчество" />
            </div>
            <div className="feedback__item">
              <p>Сообщение</p>
              <input placeholder="Сообщение" />
            </div>
          </form>
          <button>Отправить</button>
        </div>
      </main>

      <footer id="contacts">
        <ul className="contacts__list">
          <li className="contacts__item" id="contacts__item__contacts">
            <a href="#main">Главная</a>
            <p>номер телефона: +79000000000</p>
            <p>почта: hr@jovita.ru</p>
          </li>
          <li className="contacts__item" id="contacts__item__v">
            <a href="#feedback">обратная связь</a>
            <a href="#contacts">Контакты</a>
          </li>
          <li className="contacts__item" id="contacts__item__search">
            <div className="search">
              <input placeholder="Поиск..." />
              <img src={search} />
            </div>
            <div className="header__create_resume">
              <button>
                <a href="#resume">Создать резюме</a>
              </button>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
