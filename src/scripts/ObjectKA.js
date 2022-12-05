
export default class ObjectKA {
    constructor ( selectorTemplate) {
        
        this.selectorTemplate = selectorTemplate
        this._containerCards =  document.querySelector(this.selectorTemplate) 
        // this._interNum = data.IntDes;
        // this._giacNum = data.ObjectNumber;
        // this._noradNum = data.NoradNumber;
        // this._nameObj = data.Name
        console.log(this._containerCards)
    }

    createCard() {
        this._element = this._getTemplate();
        this._nameContainer = this._element.querySelector('.element_ka_name')
        this._interContainer = this._element.querySelector('.element_ka_inter')
        this._noradContainer = this._element.querySelector('.element_ka_norad')
        this._giacContainer = this._element.querySelector('.element_ka_giac')
        this._cardTrash = this._element.querySelector('.element__btn-trash')
  
        // this._nameContainer.textContent = this._nameObj;
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