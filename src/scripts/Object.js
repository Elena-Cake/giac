// //_____________________________
// //  ДОБАВЛЕНИЕ ОБЪЕКТА
// //_____________________________

// попап просмотра фото

export default class Object{
    constructor({selectorTemplate, elementsList, headerTable}, checkVisibleTableHeader) {
      this.selectorTemplate = selectorTemplate
      this._containerCards =  document.querySelector(this.selectorTemplate) 
      this._checkVisibleTableHeader = checkVisibleTableHeader
      this._elementsList = elementsList
      this._headerTable = headerTable
    }
  
    createCard() {
      this._element = this._getTemplate();
      this._listInputs = this._element.querySelectorAll('.item__input')
      this._buttonTrash = this._element.querySelector('.element__btn-trash')
      this._buttonSave = this._element.querySelector('.element__btn-done')

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
      this._buttonTrash.addEventListener('click', this.removeButton = () => { 
        this._remove()
      })
      this._buttonSave.addEventListener('click', this._save);
    }

    _removeEventListeners() {
      this._buttonTrash.removeEventListener('click', this.removeButton);
      this._buttonSave.removeEventListener('click', this._save);
    }
  
    _save = () => {
       this._listInputs.forEach(input =>{
        if (input.readOnly) {
          input.readOnly = false
          this._buttonSave.classList.remove('element__btn-done_type_edit')
          input.classList.remove('item__input_type_readonly')
        } else {
          input.readOnly = true
          this._buttonSave.classList.add('element__btn-done_type_edit')
          input.classList.add('item__input_type_readonly')
       } 
      })
    }

     _remove () {
      this._removeEventListeners()
      this._element.remove()
      this._checkVisibleTableHeader()
    }

  }
