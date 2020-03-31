// Структурируем стор, чтоб он был строготипизирован и не попала др. информация

import {IArticle} from './Article'

export interface IStoreStructure {
    articles: IArticle[];
    read: IArticle[];
    favorite: IArticle[];
    withComplains: IArticle[];
}