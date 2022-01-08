# React-Native Cards (ReactNativeCards)

Ссылка: [ReactNativeCards](https://github.com/InInferno/ReactNativeCards "React-Native Cards")
Версия: v. 0.0.1
Приложение разработано под Android на React-Native без использования Expo.

Описание:
- Изначально отрисовывается моковый массив карточек, который хранится в сторе.
- Есть два поля для ввода данных - title и text, а также кнопка для добавления карточки, которая станет активна, если поля title и text не будут пустыми. 
- Количество допустимых для ввода символов в полях ограничено (title - 10, text - 80).
- Далее идёт список карточек.
- Карточку можно удалить нажатием на кнопку "Remove Card".
- При нажатии на заголовок карточки переключается её статус (done/undone).
- Фильтрация карточке по статусу. При нажатии на "Done" - в списке отображаются только карточки в статусе "done", при нажатии на "Undone" - в статусе "undone", при нажатии на "Cards" - все карточки.
- Напротив "Done" и "Undone" отображается счётчик карточек в данном статусе.


### Технологии: 
- JS 
- React-Native
- Redux
- GIT
- Node.js
- Android Studio


### Установка:

Клонировать [репозиторий](https://github.com/InInferno/ReactNativeCards)

    git clone https://github.com/InInferno/ReactNativeCards

Установить пакеты

    npm i


### Запуск:
   
Режим разработки Android с hotreload

    npx react-native run-android

Запускается Node.js

Открыть проект (папку android) в Android Studio

Запустить приложение (Run 'app' или Shift+F10, разрабатывалось приложение на Pixel 4 API 30)
