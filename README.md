# Стартовая сборка

## Инициализация npm:

```
npm init --yes
```

## Установка библиотек:

`npm i webpack --save-dev` // установка webpack (для разработки, не для финальной сборки)

---

`npm i webpack-cli -D` // (-D это то же самое, что и --save-dev) установка интерфейса, необходимого для взаимодействия с параметрами файла конфигурации webpack

---

`npm install react react-dom` // установка пакетов react и react-dom

---

`npm install -D @types/node @types/react @types/react-dom` // если в приложении используются библиотеки, не поддерживающие типизацию по умолчанию, устанавливается набор типов для этой библиотеки (@types/название-библиотеки)

---

`npm install -D typescript ts-loader` // установка самого TypeScript и лоадера для работы ts-файлов в сборке

---

`npm i webpack-dev-server@4.15.1 -D` // установка локального сервера

### Библиотеки для обработки HTML

`npm install html-webpack-plugin -D`

---

`npm i clean-webpack-plugin --save-dev` // установка плагина для удаления содержимого dist, что позволяет упростить команду build, используемую для запуска сборки финального проекта

---

`npm install clsx` // установка библиотеки, позволяющей использовать функцию, в которую можно передавать наборы классов через запятую, либо объект с условием

### Библиотеки для обработки SCSS

`npm install -D css-loader mini-css-extract-plugin postcss-loader autoprefixer cssnano style-loader sass sass-loader` // установка пакетов, необходимых для работы со стилями, где:

- **css-loader**: для работы webpack с CSS;
- **mini-css-extract-plugin**: для объединения css-файлов;
- **postcss-loader**: для подключения PostCSS;
- **autoprefixer**: для добавления PostCSS`ом вендорных префиксов;
- **cssnano**: для минификации/оптимизации CSS-кода;
- **style-loader**: для обработки, объединения и встраивания стилей в тег `<style>`;
- **sass-loader**: для компиляции Sass-кода в CSS;
- **sass**: является JavaScript-реализацией Sass, препроцессора для таблиц стилей

---

`npm install -D url-loader @svgr/webpack` // установка url-loader и @svgr/webpack для работы с svg

### Библиотеки для разделения конфигурации webpack на prod и dev

`npm install -D merge` // установкка пакета merge для объединения конфигураций

---

`npm i -D cross-env` // установка пакета cross-enc для кроссплатформенного создания переменной окружения NODE_ENV, которая нужна для определения переменной production файла в webpack.common.js. Переменная production будет использоваться для параметрезации сборки

---

`npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh` // установка пакетов, необходимых для того, чтобы React не сбрасывал свои состояния при сохранении файлов

### Библиотеки для статического анализа и форматирования кода

`npm install -D eslint prettier eslint-config-prettier eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks`

---

`npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin`

---

`npm install -D stylelint stylelint-config-standard stylelint-order`

#### Stylelint

Используется для проверки и поддержания согласованности стилей в коде CSS, Less, Sass и других препроцессорах. Например, если есть файл CSS с использованием разных стилей написания, например, комбинирующие кавычки и одинарные кавычки для строковых значений, Stylelint может помочь обнаружить такие несогласованности и предложить исправления.

#### ESlint

Используется для обнаружения потенциальных проблем в JavaScript-коде, обеспечения согласованности стиля и применения лучших практик программирования. Например, если есть функция, которая объявлена, но нигде не используется, ESLint поможет обнаружить эту проблему и предупредить вас о ненужном коде.

#### Prettier

Предназначен для автоматического форматирования кода, чтобы обеспечить единообразие и согласованность стиля в проекте. Например, если есть файл JavaScript с разными отступами (например, использование пробелов и табуляции), Prettier сможет автоматически отформатировать код согласно предопределённым правилам, чтобы убрать несогласованности и сделать его более читабельным.

### Библиотеки для работы с репозиторием

`npm install -D husky`

`npm install -D lint-staged`

// установка пакетов для автоматизации проверки кода перед коммитом

---

`npm run prepare` // после запуска команды появляется скрытая папка .husky

---

`npm install -D commitizen cz-conventional-changelog` // установка пакетов, помогающих решить проблему несогласованности и нечёткости в коммит-сообщениях:

- **commitizen**: инструмент командной строки. Он предоставляет интерактивный интерфейс для создания коммитов. Commitizen гарантирует соблюдение определённого формата коммитов, чтобы улучшить читаемость и удобство использования в команде разработчиков
- cz-conventional-changelog: плагин для Commitizen, который определяет набор предопределённых шаблонов для коммитов, следуя соглашению об именовании коммитов "Conventional Commits"

---

`npm install --save-dev standard-version`
