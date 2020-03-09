[Английская версия документации](readme-en.md)

### Перед установкой:

Проверьте, установлена ли у вас node.js. Наберите в терминале:

```bash
node --version
```

Если node.js не установлена:

- [установите node.js](https://nodejs.org/ru/)

### Как использовать проект:

#### Создайте свой репозитроий из этого шаблона, используя кнопку "Use This Template" ("Использовать этот шаблон").

Больше информации [здесь](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).
После создания шаблона, просто клонируйте его и используйте.

#### Или клонируйте проект вручную:

1. склонируйте репозиторий:

   ```bash
   git clone https://github.com/frontend05102019/GULP_TEMPLATE_PROJECT.git
   ```

2. откройте в теминале склонированный проект (можете переименовать папку как захотите)
3. замените ссылку на удаленный репозиторий в git config ссылкой на ваш репозиторий:

   ```bash
   git remote set-url origin <YOUR LINK TO YOUR REMOTE REPO>
   ```

4. замените имя пользователя и email в git config на ваши.

### Как запустить проект:

1. откройте папку проекта в терминале.

2. установите зависимости:

   ```bash
   npm install
   ```

3. запустите проект:

   - чтобы запустить проект с компилятором less:
     ```bash
     npm run serve-less
     # или
     npm run serve
     ```
   - чтобы запустить проект с компилятором sass:
     ```bash
     npm run serve-sass
     ```

##### Проект запустится на localhost:3000.

##### Проект автоматически перезагружает браузер при каждом сохранении.

##### ЧТОБЫ ЗАКОНЧИТЬ РАБОТУ, в теминале нажмите Ctrl+C.

#### КАК СМЕНИТЬ КОМПИЛЯТОР:

Чтобы перейти с использования less на sass и поменять компилятор, нужно:

- остановить проект командой Ctrl+C, если проект запущен
- создать в папке src/styles/ файл main.sass (ВАЖНО! Название обязательно должно быть main.sass)
- добавить в main.sass стили
- запустить проект соответствующей командой(см. "Как запустить проект" выше)

Чтобы сменить компилятор обратно на less, нужно просто запустить соответствующую команду(см. "Как запустить проект" выше). Перед запуском убедитесь, что main.less существует.

### Как писать код:

1. Вы должны работать ТОЛЬКО в папке /src
2. Весь html код должен быть в /src/index.html
3. Весь js пишите в /src/js/script.js или же, если хотите создать несколько скиптов, их нужно подключить в /src/index.html
4. Все стили должны быть в файле /src/styles/main.less или /src/styles/main.sass если вы используете sass компилятор. Если вы хотите добавить дополнительные файлы со стилями, добавляйте их в папке src/styles и используйте @import в main.less (main.sass)
5. Все шрифты(если есть) должны быть помещены в папку /src/fonts и импортированы в main.less из этой папки, например:

```bash
    # пример для less
    # in /src/styles/main.less
    @font-face {
        font-family: "christmas";
        src: url("../fonts/christmaseve.ttf");
    }
```

6. Все картинки(png, img, svg) должны быть помещены в папку /src/images и импортированы из этой папки, например:

```bash
    # in src/index.html
    <img src="./images/testImage.jpg" alt="test image" />
```
