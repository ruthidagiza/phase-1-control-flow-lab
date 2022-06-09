function scuberGreetingForFeet(valueDistance) {
  if (valueDistance <= 400) {
    return "This one is on me!";
  } else if (valueDistance >= 2000 && valueDistance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(destination) {
  // Write your code here!
  return destination === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
switch(tip){
  case "generous":
    return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
      default:
      return "Bye.";
}

}