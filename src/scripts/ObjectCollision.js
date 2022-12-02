export default class ObjectCollision {
    constructor (data, selectorTemplate) {
        
        this.selectorTemplate = selectorTemplate
        this._containerCards =  document.querySelector(this.selectorTemplate) 
        this._typeOrbit = data.typeOrbite;

        this._interNumKO = data.IntDesKO;
        this._giacNumKO = data.ObjectNumberKO;
        this._noradNumKO = data.NoradNumberKO;
        
        this._interNumKA = data.IntDesKA;
        this._giacNumKA = data.ObjectNumberKA;
        this._noradNumKA = data.NoradNumberKA;
    }

    createCard() {
        this._element = this._getTemplate();
        this._typeOrbitContainer = this._element.querySelector('.element__type-orbit')

        this._interContainerKO = this._element.querySelector('.element_ko_inter')
        this._noradContainerKO = this._element.querySelector('.element_ko_norad')
        this._giacContainerKO = this._element.querySelector('.element_ko_giac')

        this._interContainer = this._element.querySelector('.element_ka_inter')
        this._noradContainer = this._element.querySelector('.element_ka_norad')
        this._giacContainer = this._element.querySelector('.element_ka_giac')

        this._cardTrash = this._element.querySelector('.element__btn-trash')

        this._typeOrbitContainer.textContent = this._typeOrbit
        console.log(this._typeOrbit)
  
        this._interContainerKO.textContent = this._interNumKO;
        this._noradContainerKO.textContent = this._noradNumKO;
        this._giacContainerKO.textContent = this._giacNumKO;

        this._interContainer.textContent = this._interNumKA;
        this._noradContainer.textContent = this._noradNumKA;
        this._giacContainer.textContent = this._giacNumKA;


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