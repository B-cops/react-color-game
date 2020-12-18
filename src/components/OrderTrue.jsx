export default function OrderTrue(object,answer) {
    if (answer==object.order[object.index]) {
        /*console.log(object.index,object.order[object.index],answer);*/
        object.index += 1;
        return {
            index : object.index
        };
    }else {
        return {
            index : object.index,
            trueFalse : false,
        };
    }
}
