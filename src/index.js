import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store = {store}>
          <App /*state={state} dispatch = {store.dispatch.bind(store)} store = {store}*//>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

  
// store.subscribe(() => {
//   rerenderEntireTree();
// });  Перересовка ВСЕГО дерева при малейшем изменении

// Суть урока. 
// Context API упрощает передачу данных из стора в компоненту.
// Если раньше мы спускали пропсы по дереву вниз, то теперь мы создаём один глобальный объект, при помощь которого можно минуть все препядствия с перейти сразу в нужный дочерний компонент
// Создаём новый файл. Мы хотим передать store, поєтому называем StoreContext.js. Внутри создаём контекс. const storeContext = React.CreateContext(null); Експортируем её по дефолту.
// Импорт делаем в индекс.js. После чего вызываем тег по имени константы <StoreContext.Provider store = {store}>...</StoreContext.Provider> и внутрь помещаем наш App  