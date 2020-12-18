export default function DefaultColor(object) {
    
    switch(object.order[object.index]) {
        case 0:
            return {
                tabTempo : [{color:'blueOff'},{color:'redOff'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},],
            };
          break;
        case 1:
            return {
                tabTempo : [{color:'blueOff'},{color:'redOff'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},],
            };
          break;
        case 2:
            return {
                tabTempo : [{color:'blueOff'},{color:'redOff'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},],
            };
          break;
        case 3:
            return {
                tabTempo : [{color:'blueOff'},{color:'redOff'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},],
            };
          break;
        default:
            return {
                tabTempo : [{color:'blueOn'},{color:'redOn'},{color:'greenOn'},{color:'yellowOn'},{color:'white'},],
            };
      }
}