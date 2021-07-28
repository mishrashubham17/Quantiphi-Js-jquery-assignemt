/*Given below an objects representing different teams in Q and #teamMembers in that team

qTeams = {aaiec: 400, 
aaiwc: 60, 
qai: 200, 
poc: 100,
gtm: 50,
hr: 10
};
        Write an efficient code to display names of the teams in descending order wrt to the #teamMembers working in the teams.
*/

qTeams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };

let value=Object.values(qTeams);
value.sort((a,b)=>{return b-a;})

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
let i;
for(i=0;i<value.length;i++)
{
    console.log(getKeyByValue(qTeams,value[i]));
}
/*output
aaiec
qai
poc
aaiwc
gtm
hr
*/