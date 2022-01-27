import {delay, put, take, call} from 'redux-saga/effects'

function double(number){
    return number * 2;
}

export function* testSaga(){
    
    while(true){
        console.log('Start Saga');
        const state = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        console.log(a);
        const b = yield call(double, 3);
        console.log(b);
        console.log("Finish saga function", state)
    }
}

export function* dispatchTest(){
    while(true){
        yield delay(1000);
        yield put({type:'TEST_MESSAGE', payload: 1000});
    }
}