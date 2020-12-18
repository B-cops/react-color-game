export default function AddRandom(object) {
    
    function getRandomInt() {
        return Math.floor(Math.random() * Math.floor(object.four));
    }
    function addNewColorIndex0() {
        object.order[object.index] = getRandomInt();
        return 0;
    }
        addNewColorIndex0();
    return {
        four : 4
    };
      
}
