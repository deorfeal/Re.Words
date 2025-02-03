# Re.Words

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## 📚 Функциональность

### 📦 Управление словами

Трехуровневая организация:
Глобальные категории: Все слова / На повторе / Изученные

Языковые группы: Отдельные словари для каждого языка

Тематические подкатегории (например: "Транспорт", "Еда")

Поддержка неограниченного количества языков и переводов

Быстрый переключатель направления перевода (A → B / B → A)

### 🔧 Фильтры и сортировка
Расширенные варианты отображения:

Новые ➕ / Старые 🕰

Длинные 🔠 / Короткие 🔡

Алфавитный порядок (A-Z ⬆ / Z-A ⬇)

Случайный микс 🎲

Динамическое обновление списков при изменениях

### ⚡ Групповые операции
Массовые действия с выбранными словами:

Перенос между категориями ↔

Пакетное удаление 🗑

Отметка для повторения 🔁

Интеллектуальные предупреждения о критических действиях ⚠

### 🔍 Универсальный поиск
Мгновенный поиск по всем словам из любой точки приложения

Подсветка совпадений в результатах

Прямой переход к карточке слова

### 🔐 Система аккаунтов
Полноценная регистрация/авторизация через Firebase

Шифрование персональных данных 🔒

Кросс-устройственная синхронизация 🔄

Автоматический выход после неактивности ⏳

---

## 📊 Логика работы
Динамическое обновление: Все изменения мгновенно синхронизируются с Firebase

Автоматические категории:

Слова перемещаются в "Изученные" после 5 правильных повторений ✅

Авто-возврат в "На повторе" при ошибках ❗

Валидация данных: Проверка корректности перед сохранением в базу

Оптимизация запросов: Пакетная обработка операций для снижения нагрузки

---

## 📸 Скриншоты и демонстрация
Ссылка на демо-версию: https://deorfeal.github.io/Re.Words

---

## 📧 Контакты
Автор: Михаил Гакман

Email: deorfeal.it@gmail.com

WhatsApp: +39 351 795 1487

---

## 📜 Лицензия
Проект распространяется под лицензией MIT.

---

Re.Words демонстрирует навыки работы с:
✅ Vue 3 Composition API
✅ TypeScript и строгой типизацией
✅ Firebase (Auth/Firestore/Storage)
✅ Комплексной системой состояний
✅ Адаптивной версткой
✅ Оптимизацией сетевых запросов

Сделайте изучение языков эффективным и увлекательным! 🚀
```
