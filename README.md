# Frontend

### Usage

  - Install depedencies
    ``` 
      yarn install
    ```
  - Run project
    ```
      yarn start
    ```

### Directory

```
frontend
┣ 📂public
┣ 📂src
┃ ┗ 📂assets // all assets used
┃ ┗ 📂components // molecules of parts components
┃ ┗ 📂configs // config redux and other
┃ ┗ 📂pages // pages component 
┃ ┗ 📂parts // section component
┃ ┗ 📂utils // own utility
┃ ┗ 📜index.js
┃ ┗ 📜App.js
┃ ┗ 📜router.js
┃ ┗ 📜reportWebVitals.js
┣ 📜README.md
┣ 📜package-lock.json
┗ 📜package.json
```

### Production Command

  Render with webpack

  ```
    yarn build
  ```

  The output is in the directory build when finished