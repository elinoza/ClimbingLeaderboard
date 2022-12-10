function climbingLeaderboard(ranked, player) {
  // Write your code here
player=player.reverse()
const ranks=[];
let lastScore=null;
let lastRank=1;

let currentScoreIndex=0;




//console.log("ranked:",ranked,"player:",player)
player.map(aliceValue=> {
  while(currentScoreIndex < ranked.length)
  {
    let scoreValue= ranked[currentScoreIndex];
   // console.log("aliceValue",aliceValue,"ranked[currentScoreIndex]",ranked[currentScoreIndex],"currentScoreIndex",currentScoreIndex,"lastRank",lastRank,"currentScoreIndex",currentScoreIndex)
  if(aliceValue>= scoreValue){ranks.push(lastRank);break}
  if(scoreValue!== lastScore){lastRank+=1;
  lastScore=scoreValue}
  currentScoreIndex+=1
  }
  if(currentScoreIndex>=ranked.length){ranks.push(lastRank)}
})
//console.log(ranks,index)
return ranks.reverse()

}

let ranked=[100,100,50,40,40,20,10];
let player=[120,50,25,5]
climbingLeaderboard(ranked,player)
