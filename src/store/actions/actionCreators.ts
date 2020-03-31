import { LOAD_NEWS, ADD_NEWS, REMOVE_NEWS, EDIT_NEWS, MARK_AS_READ, ADD_TO_FAVORIT, ADD_TO_READ_LATER, RATE_ARTICLE, ADD_COMMENT, ADD_COMPLAIN } from "../types"
import {IArticle} from '../../entities/Article'

export const loadNews = (): INewsActionType => ({
        type: LOAD_NEWS
    })

export const addNews = (article: IArticle):INewsActionType => ({
    type: ADD_NEWS,
    article
})

export const removeNews = (id: string):INewsActionType => ({
    type: REMOVE_NEWS,
    id
})

export const editNews = (article: IArticle):INewsActionType => ({
    type: EDIT_NEWS,
    article
})

export const markAsRead = (id: string):IArticleActionType => ({
    type: MARK_AS_READ,
    id
})

export const addToFavorit = (id: string): IArticleActionType => ({
    type: ADD_TO_FAVORIT,
    id
})

export const addToReadLater = (id: string): IArticleActionType => ({
    type: ADD_TO_READ_LATER,
    id
})

export const rateArticle = (id: string, rating: number): IArticleActionType => ({
    type: RATE_ARTICLE,
    id,
    rating
})

export const addComment = (id: string, comment: string): IArticleActionType => ({
    type: ADD_COMMENT,
    id,
    comment
})

export const addComplain = (id: string, complain: string): IArticleActionType => ({
    type: ADD_COMPLAIN,
    id,
    complain
})

export interface IActionTypeBase {
    type: string;
}

export interface INewsActionType extends IActionTypeBase {
    id?: string;
    article?: IArticle;
}

export interface IArticleActionType extends IActionTypeBase {
    id?: string;
    rating?: number;
    comment?: string;
    complain?: string;
}