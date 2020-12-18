export default function OrderDisplay(object, i) {
    
    switch(object.order[object.i]) {
        case 0:
            return {
                tabTempo : [{color:'blueOn'},{color:'redOff'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},],
            };
          break;
        case 1:
            return {
                tabTempo : [{color:'blueOff'},{color:'redOn'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},],
            };
          break;
        case 2:
            return {
                tabTempo : [{color:'blueOff'},{color:'redOff'},{color:'greenOn'},{color:'yellowOff'},{color:'white'},],
            };
          break;
        case 3:
            return {
                tabTempo : [{color:'blueOff'},{color:'redOff'},{color:'greenOff'},{color:'yellowOn'},{color:'white'},],
            };
          break;
        default:
            return {
                tabTempo : [{color:'blueOn'},{color:'redOn'},{color:'greenOn'},{color:'yellowOn'},{color:'white'},],
            };
      }
}