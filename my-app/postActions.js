//postActions.js

import dispatcher from "./appDispatcher"
import actionTypes from "./actionTypes";
import data from "../db.json";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";
let _posts = [];

class PostStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getPosts() {
        return _posts;
    }
}

// 测试
export function getPosts() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_POSTS,
        posts: data["posts"],
    });
}