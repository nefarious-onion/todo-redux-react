import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//reducers
import rootReducer from "./rootReducer";

const composeEnhancers = composeWithDevTools({
	realtime: true
	// options like actionSanitizer, stateSanitizer
});

const store = createStore(
	rootReducer,
	composeEnhancers(
        //applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
        applyMiddleware(thunk)
    )
);

export default store;