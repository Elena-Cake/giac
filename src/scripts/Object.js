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
      this._listInputs = this._element.querySelectorAll('.item__input')
      // this._interContainer = this._element.querySelector('.element_ko_inter')
      // this._noradContainer = this._element.querySelector('.element_ko_norad')
      // this._giacContainer = this._element.querySelector('.element_ko_giac')
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
      this._buttonTrash.addEventListener ('click', this._remove);
      this._buttonSave.addEventListener ('click', this._save);
      }
  
    _save = () => {
       this._listInputs.forEach(input =>{
        if (input.readOnly) {
          input.readOnly = false

        } else {
          input.readOnly = true
          this._buttonSave.classList.remove('.element__btn-done')
          this._buttonSave.classList.add('.element__btn-done_type_edit')
       } 
      })
    }
    // _openPopupRemove = () => {
    //   this._popupDelete.open(this._idCard, this._element)
    // }

     _remove = () => {
      this._element.remove()
    }

  }
