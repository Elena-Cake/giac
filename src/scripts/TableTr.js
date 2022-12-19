// Добавление строк для поиска и отрисовки заданий


export default class TableTr{
    constructor({selectorTemplate, elementsList, headerTable}, findObject, clearForm, formDocument, data) {
      this.selectorTemplate = selectorTemplate
      this._containerCards =  document.querySelector(this.selectorTemplate) 
      this._elementsList = elementsList
      this._headerTable = headerTable
      this._findObject = findObject //выбирает нужный объект
      this._data = data
      this._clearForm = clearForm
      this._formDocument = formDocument
    }
  
    createCard() {
      this._element = this._getTemplate();

      this._element.querySelector('.element__num').textContent = this._data.Num
      this._element.querySelector('.element__date').textContent = this._data.TaskEpoch
      this._element.querySelector('.element__approach').textContent = this._data.countApproach
      this._element.querySelector('.element__condition').textContent = this._data.countCondition
      this._element.querySelector('.element__destroy').textContent = this._data.countBreakUp
      this._element.querySelector('.element__deorbit').textContent = this._data.countDeorbit
      this._element.querySelector('.element__spacecraft').textContent = this._data.countConditionKA
      this._element.querySelector('.element__massage').textContent = this._data.Message

      this._num = this._element.querySelector('.element__num').textContent

      this._setEventListeners();
      return this._element;
    };

  
    _getTemplate() {
      const cardElement = 
        this._containerCards
        .content
        .querySelector('.element')
        .cloneNode(true);
      return cardElement;
    }
  
    _setEventListeners() {
      this._element.addEventListener('click', this.addData = () => { 
        this._clearForm(this._formDocument)
        this._findObject(this._num)
      })
    }

    _removeEventListeners() {
      this._element.removeEventListener('click', this.addData);
    }
  


  }
