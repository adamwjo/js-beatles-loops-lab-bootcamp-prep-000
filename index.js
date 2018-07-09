function theBeatlesPlay(musicians, instruments){
  var theBeats = []
  for (let i = 0; i < 4; i++){
    theBeats.push(`${musicians[i]} plays ${instruments[i]}`)
  } return theBeats
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts){
  while (facts.length < 5){
    facts[0].unshift('!!!')
  } return facts
}
