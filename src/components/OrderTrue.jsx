export default function OrderTrue(object,answer) {
    if (answer==object.order[object.index]) {
        object.index += 1;
        return {
            index : object.index
        };
    }else {/* "start": "node server.js",*/
        return {
            index : 0,
            trueFalse : false,
        };
    }
}
