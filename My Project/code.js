var money = 0;
var activityType;
var intensity;

updateScreen();

onEvent("moneyDropdown", "change", function(){
  money = getText("moneyDropdown");
  updateScreen();
});

onEvent("intensityDropdown", "change", function(){
  intensity = getText("intensityDropdown");
  updateScreen();
});

//This function is used in every on event to check the intensity and the money value. If they are 
// equal to a certain combination in which one of the three intensities are picked and the money is below 
function updateScreen(){
 if (intensity == "Relaxing" && money < 50){
   activityType = "park.";
   setText("textOutput", "For $" + money + " and you want a " + intensity +
   " intensity, I recommend going to the " + activityType);
 } else if (intensity == "Relaxing" && money >= 50){
   activityType = "boat ride.";
   setText ("textOutput","For $" + money + " and you want a " + intensity + 
   " intensity, I reccomment going for a " + activityType);
 }else if (intensity == "Medium" && money < 50){
   activityType = "arcade.";
   setText("textOutput", "For $" + money + " and you want a " + intensity +
   " intensity, I recommend going to the " + activityType);
 }else if (intensity == "Medium" && money >= 50){
   activityType = "trampoline park.";
   setText("textOutput", "For $" + money + " and you want a " + intensity +
   " intensity, I recommend going to a " + activityType);
 }else if (intensity == "High" && money < 50){
   activityType = "go kart racing place.";
   setText("textOutput", "For $" + money + " and you want a " + intensity +
   " intensity, I recommend going to a " + activityType);
 }else if (intensity == "High" && money >= 50){
   activityType = "rollercoaster.";
   setText("textOutput", "For $" + money + " and you want a " + intensity +
   " intensity, I recommend going to a " + activityType);
 }else{
   setText("textOutput", "Pick how much you want to spend and the intensity of activity to find a place to have fun!");
 }
  
}

