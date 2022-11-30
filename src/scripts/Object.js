// //_____________________________
// //  ДОБАВЛЕНИЕ ОБЪЕКТА
// //_____________________________

// попап просмотра фото

export default class Object{
    constructor(data, selectorContainerTable) {

        this._containerTable =  document.querySelector(selectorContainerTable)
    }
  
    createCard() {
      this._element = this._getTemplate();
      this._cardFoto = this._element.querySelector(this._selectorFoto);
      this._cardName = this._element.querySelector('.element__name');
      this._cardLikeCounter = this._element.querySelector(this._selectorCounter)
      this._cardTrash = this._element.querySelector(this._selectorTrash)
      this._cardLike = this._element.querySelector(this._selectorLike)

      this._setEventListeners();
      
      
      return this._element;
    };

    _isOwnedCard() {
      return this._userIdCard !== this._userId
    }
  
    _getTemplate() {
      const cardElement = 
        this._containerCards
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    _setEventListeners() {
      this._cardFoto.addEventListener('click', this._openFoto);
      this._cardLike.addEventListener ('click', this._like);
      this._cardTrash.addEventListener ('click', this._openPopupRemove);
      }
  
    _openFoto = () => {
      this._handleCardClick( this._name, this._link);
    }
  
    _like = (evt) => {
     if ( evt.target.classList.contains('element__btn-like_active') ) {
        this._api.deleteLike(this._idCard)
          .then((res) => {
            this._assignLikeCount(res)
            evt.target.classList.remove('element__btn-like_active')
          })
          .catch((err) => {
            console.log(err); 
          });
        
     } else {
        this._api.sendLike(this._idCard)
          .then((res) => {
            this._assignLikeCount(res)
            evt.target.classList.add('element__btn-like_active')
          })
          .catch((err) => {
            console.log(err); 
          });
     }
    }

    _assignLikeCount (cardInfo) {
      this._cardLikeCounter.textContent = cardInfo.likes.length
    }

    _openPopupRemove = () => {
      this._popupDelete.open(this._idCard, this._element)
    }

     _remove = () => {
      this._element.remove()
    }

  }
