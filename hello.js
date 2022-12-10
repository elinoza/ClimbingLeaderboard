function climbingLeaderboard(ranked, player) {
  // Write your code here
player=player.reverse()
let index=0;
let count=0;
let ranks=[];


console.log("ranked:",ranked,"player:",player)
player.map(score=> {
   for(let i=count; i<ranked.length; i++)
   {
       console.log("score",score,"ranked[i]",ranked[i],"i",i,"ranks",ranks,"index",index)
       if(score<ranked[i] && ranked[i]=== ranked[i-1]){index=index-1};
      if(score<ranked[i] && i===(ranked.length-1)){ranks.push(index+2);
      //console.log("hey") 
      }
      else if( score >= ranked[i] ){ count=i;ranks.push(index+1);break}
   index++
    }
})
//console.log(ranks,index)
return ranks.reverse()







}
