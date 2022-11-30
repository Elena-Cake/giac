//___________________________________
//  ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА 
//  С ФОРМОЙ
//___________________________________
import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor (selectorPopup, textTitle, submitForm) {
        super(selectorPopup)
        this._popupTitle = this._popup.querySelector('.modal__title')
        this._inputList = this._popup.querySelectorAll('.item__input')
        this._formElement = this._popup.querySelector('.modal__form')
        this._functionSubmitForm = submitForm
        this._buttonSubmit = this._popup.querySelector('.popup__btn-save')
        this._textTitle = textTitle
    }
    open() {
        super.open()
        this._popupTitle.textContent = this._textTitle;
    }

    _setEventListeners () {
        super._setEventListeners();
        this._formElement.addEventListener('submit', this._submitForm)
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._formElement.removeEventListener('submit', this._submitForm)
    }

    _getInputValues () {
        const inputsValues = {}
        this._inputList.forEach(input => {
            inputsValues[input.name] = input.value
        });
        return inputsValues
    }

    _submitForm = (evt) => {
        evt.preventDefault();
        this._functionSubmitForm(this._getInputValues()); 
        this._formElement.removeEventListener('submit', this._submitForm)
    } 

    _reset () {
        this._formElement.reset(); 
    }

    close () {
        super.close();
        this._reset();
        this._popupTitle.textContent = 'Добавить КО'
    }
}