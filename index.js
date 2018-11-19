// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
  if (blockNumber > 42){
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber)*264;
}

function distanceTravelledInFeet(start,end){
  if (start < end){
    return (end - start)*264;
  } else {
  return (start - end)*264;
  }
}

function calculatesFarePrice(start,destination){
  const dist = distanceTravelledInFeet(start,destination);
  if (dist <= 400){
    return 0;
  }else if (dist > 400 && dist <= 2000){
    return (dist - 400) * 0.02
  }else if (dist > 2000 && dist <= 2500){
    return 25;
  }else{
    return 'cannot travel that far'
  }
}
