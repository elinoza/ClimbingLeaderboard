function climbingLeaderboard(ranked, player) {
    // Write your code here

let compareNumbers=(a, b) => {
  return b-a;
}

let findTheRank=(newLeaderBoard,play)=>{
    let tempRank=[];
     newLeaderBoard.map((player) => { player.map((elem,index) => {if (elem===play && (index%2)!=0 ){tempRank.push(player[0])}})});return tempRank[0]}
let changeRankings =(ranked)=>{
        ranked.sort(compareNumbers)
        let leaderBoard=[]
        let rank=1
        for(let i = 0; i < ranked.length; ++i) {
            if( ranked[i-1] && ranked[i]===ranked[i-1] ){leaderBoard.push([rank-1,ranked[i],i])}
            else { leaderBoard.push([rank,ranked[i],i]); rank+=1}
          }
       
          return leaderBoard
        }

//change the rankings after each scores
// add each score to the ranked array ,then sort descending,then trigger the change function 
 let rank=[]
 player.map((play)=> {
     ranked.push(play);
    changeRankings(ranked);
     let newLeaderBoard= changeRankings(ranked)

//finding the rank of player for each score below 

rank.push(findTheRank(newLeaderBoard,play))
ranked.splice(ranked.findIndex(elem=>elem===play),1)
   
     ;} )
   return rank 
}

let ranked=[100,100,50,40,40,20,10]
let player=[5,25,50,120]

console.log(climbingLeaderboard(ranked,player))