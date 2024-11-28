import { combineReducers, legacy_createStore as createStore } from "redux";
import { homeReducer } from "./homeReducer";
import { headerReducer } from "./headerReducer";
import { footerReducer } from "./footerReducer";
import { sidebarReducer } from "./sidebarReducer";
import { pricesReducer } from "./pricesReducer";
import { reviewsReducer } from "./reviewsReducer";
import { timeTableReducer } from "./timeTableReducer";
import { faqReducer } from "./faqReducer";
import { gordeevaReducer } from "./doctors/gordeevaReducer";
import { allDoctorsReducer } from "./allDoctorsReducer";


const rootReducer = combineReducers({
    homePage: homeReducer,
    header: headerReducer,
    footer: footerReducer,
    sidebar: sidebarReducer,
    pricesPage: pricesReducer,
    reviewsPage: reviewsReducer,
    timeTablePage: timeTableReducer,
    faqPage: faqReducer,
    gordeevaPage: gordeevaReducer,
    allDoctorsPage: allDoctorsReducer
})

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

//let state: AppStateType;

export const store = createStore(rootReducer);

export type StoreType = typeof store;

//@ts-ignore
window.store = store;