const modalOpen = document.querySelector('.info__sign')
const form = document.querySelector('.modal-form')



// _- системная функция, которая должна быть private
function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" data-close>
                <form action="" class="modal-form" name="modal-form" onsubmit="validate()">
                    <p class="modal__header">Информация о вас</p>
                    <div class="modal-top modal-separator">
                        <div class="modal-top__left">
                            <div class="fields centered-column">
                                <div class="fields-name">
                                    <label class="field__name">Ваше имя</label>
                                    <input type="text" class="POST-name field" name="name" required="required" minlength="2">
                                </div>
                                <div class="field-surname">
                                    <label class="field__name">Ваша фамилия</label>
                                    <input type="text" class="POST-surname field" name="surname" required="required" minlength="3">
                                </div>
                            </div>
                        </div>
                        <div class="modal-top__right centered-column">
                            <div class="right-email">
                                <label class="field__name">Ваш e-mail</label>
                                <input type="email" class="POST-email field" id="email-field" name="email" required="required">
                            </div>
                            <div class="datetime">
                                <label class="datetime__title">Выберите удобные дату и время</label>
                                <input class="input-datetime field" type="datetime-local" name="datetime" id="datetime" required="required"> 
                            </div>
                        </div>
                    </div>
                    <div class="modal-mid modal-separator">
                        <div class="modal-mid__left">
                            <p class="services__title">Услуги</p>
                            <label class="services__lbl label" for="tarot">
                                <input class="label-splitter" type="checkbox" id="tarot" name="tarot">Гадание по картам Таро
                            </label><br>
                            <label class="services__lbl label" for="hand">
                                <input class="label-splitter" type="checkbox" id="hand" name="hand">Гадание по руке
                            </label><br>
                            <label class="services__lbl label" for="prediction">
                                <input class="label-splitter" type="checkbox" id="prediction" name="predict">Астрологический прогноз на будущее
                            </label><br>
                        </div>
                        <div class="modal-mid__right">
                            <p class="buttons__title">Язык сеанса</p>
                            <label class="radio__lbl label" for="eng">
                                <input type="radio" name="fav_language" id="eng" value="English" class="radio__btn label-splitter" required="required">English
                            </label><br>
                            <label class="radio__lbl label" for="esp">
                                <input type="radio" name="fav_language" id="esp" value="Español" class="radio__btn label-splitter" required="required">Español
                            </label><br>
                            <label class="radio__lbl label" for="rus">
                                <input type="radio" name="fav_language" id="rus" value="Русский" class="radio__btn label-splitter" required="required">Русский
                            </label><br>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" value="Отправить" class="form__btn btn-skin">
                    </div>
                </form>
            </div>
        </div>
        `)
    document.body.appendChild(modal)
    return modal
}

// функционал модального окна через замыкание
$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    // защита от некорректного поведения при открытии/закрытии
    let closing = false
    let destroyed = false

    // var listener = ev => {
    //     if(ev.target.dataset.close){
    //         console.log(ev.target)
    //         modal.close()
    //     }
    // }

    const modal = {
        open(){
            if(destroyed) {
                return console.log('modal is destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close(){
            // if(!validate){
                closing = true
                $modal.classList.remove('open')
                $modal.classList.add('hide')
                setTimeout(() => {
                    $modal.classList.remove('hide')
                    closing = false
                }, ANIMATION_SPEED)
                // document.querySelectorAll('input').forEach(el => el.value = '');
            // }
        },
    }
    modalOpen.addEventListener('click', () => {
        modal.open()
    })


    const listener = ev => {
        if(ev.target.dataset.close){
            console.log(ev.target)
            document.querySelector('.modal-form').reset();
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)


    // добавляем к объекту modal метод destroy (очищает события и убирает эл-т из DOM)
    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        }
    })
}


