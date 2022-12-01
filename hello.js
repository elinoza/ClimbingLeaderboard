function climbingLeaderboard(ranked, player) {
  // Write your code here
let rank=[];
let compareNumbers=(a, b) => {
return b-a;
}
let makeUnique = (ranked)=>{return [...new Set(ranked)] }
player.map((play)=> {
 let count=0;
   ranked.push(play)
 let filtered= makeUnique(ranked) 
 filtered.sort(compareNumbers)
 let index=filtered.findIndex(elem=>elem===play)
  rank.push(index+1)
})
return rank
}