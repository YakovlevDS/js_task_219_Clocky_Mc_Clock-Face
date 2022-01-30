// solution 1
// var whatTimeIsIt = function(angle) {
//       let h = ~~(angle/30), m = ~~((angle%30)*2);
//       return `${h==0?12:h>9?h:"0"+h}:${m>9?m:"0"+m}`
//     }
  
// solution 2

// var whatTimeIsIt = function (angle) {
//       if (angle < 30) {
//         angle += 360;
//       }
    
//       let minutes = angle * 2;
    
//       let hours = ('0' + Math.trunc(minutes / 60)).slice(-2);
//       minutes = ('0' + Math.floor(minutes % 60)).slice(-2);
    
//       return `${hours}:${minutes}`;
//     }
// solution 3
// const whatTimeIsIt = angle => {
//       let hours = ((Math.floor(angle / 30)||12) + '').padStart(2, '0');
//       let minutes = (Math.floor(angle % 30 * 2) + '').padStart(2, '0');
//       return hours + ':' + minutes;
//     };
// solution 4

const whatTimeIsIt =  angle=> {
      let calc = Math.floor(angle / 30)
      let remain = angle % 30
      let min = Math.floor(remain * 2)
  
      if (angle == 0) return "12:00"
      if (calc == 0 && min < 10) return `12:0${min}`
      if (calc == 0 && min > 9) return `12:${min}`
      if (remain == 0 && calc < 10) return `0${calc}:00`
      if (remain == 0 && calc > 9) return `${calc}:00`
      if (min < 10 && calc < 10) return `0${calc}:0${min}`
      if (min < 10 && calc > 9) return `${calc}:0${min}`
      if (min > 9 && calc < 10) return `0${calc}:${min}`
      if (min > 9 && calc > 9) return `${calc}:${min}`
  }


console.log(whatTimeIsIt(350));
