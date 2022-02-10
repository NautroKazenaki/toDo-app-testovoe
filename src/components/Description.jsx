import React from 'react'
import {Typography} from '@material-ui/core'

const Description = () => {
    return (
        <div className="descripton-wrapper">
            <div className="description-content">
                <div className="description-title">
                    <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/75c88ae5-b73c-4f6b-a31e-6971a1686d72.png?auto=format&size=150"/>
                </div>
                <div className="description-main">
                    <Typography variant="h6" gutterBottom>
                        1. Приложение должно содержать 2 страницы: главная и список todo -{">"} так оно и есть! И не страницей больше <br />
                        2. Переход между страницами должен быть реализован через navbar -{">"} он, кстати, слева. Можно пощелкать, проверить <br />
                        3. На главной странице должно быть лого и краткое описание страницы -{">"} вы на него недавно смотрели, а сейчас читаете описание <br />
                        4. На странице для списка todo должен быть интерактивный список -{">"} выглядит суховато, но весьма интерактивно <br />
                        5. Данные для списка должны быть запрошены с https://jsonplaceholder.typicode.com/todos -{">"} проверить можно в 'src/api/tasksApi.js' <br />
                        6. Должна быть реализована возможность добавления/изменения/удаления todo -{">"} уф, это была не самая простая задача. Новый появляется последним <br />
                        7. Должна быть реализована пагинация без перезагрузки страницы -{">"} а это правда сложная, к сожалению, я бы справился будь у эндпойнта определенный параметры, но я, правда, пытался<br />
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Description
