// //_____________________________
// //  ДОБАВЛЕНИЕ ОБЪЕКТА
// //_____________________________

// попап просмотра фото

export default class Object{
    constructor( selectorTemplate) {
      this.selectorTemplate = selectorTemplate
      this._containerCards =  document.querySelector(this.selectorTemplate) 
      // this._interNum = data.IntDes;
      // this._giacNum = data.ObjectNumber;
      // this._noradNum = data.NoradNumber;
    }
  
    createCard() {
      this._element = this._getTemplate();
      this._interContainer = this._element.querySelector('.element_ko_inter')
      this._noradContainer = this._element.querySelector('.element_ko_norad')
      this._giacContainer = this._element.querySelector('.element_ko_giac')
      this._cardTrash = this._element.querySelector('.element__btn-trash')

      // this._interContainer.textContent = this._interNum;
      // this._noradContainer.textContent = this._noradNum;
      // this._giacContainer.textContent = this._giacNum;

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
      this._cardTrash.addEventListener ('click', this._remove);
      }
  

    _openPopupRemove = () => {
      this._popupDelete.open(this._idCard, this._element)
    }

     _remove = () => {
      this._element.remove()
    }

  }
