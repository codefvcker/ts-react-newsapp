import { IStoreStructure } from "../../entities/StoreStructure";
import { IArticleActionType, IActionTypeBase } from "../actions/actionCreators";
import { Reducer } from "react";
import { LOAD_NEWS, ADD_NEWS } from "../types";

const initState: IStoreStructure = {
    articles: [],
    read: [],
    favorite: [],
    withComplains: []
}

const storeReducer: Reducer<any, any> = (state: IStoreStructure, action: IActionTypeBase) => {
    switch(action.type) {
        case LOAD_NEWS: 
        console.log('LOAD')
        case ADD_NEWS: 
        console.log('ADD')
        default: 
        return state
    }
}