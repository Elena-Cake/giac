//___________________________________
//  ОТРИСОВКА ЭЛЕМЕНТОВ НА СТРАНИЦЕ
//___________________________________

export default class Section {
    constructor ({data, renderer}) {
        this._items = data
        this._renderer = renderer
    }

    addItem(element, container) {
        container.append(element);
    }

    renderItems(data) {
        data.forEach(item => {
            this._renderer(item, section, this._container); 
          });
    }
}