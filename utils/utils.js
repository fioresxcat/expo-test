export const getTimeDifference = (timeInSeconds) => {
    const currentTime = new Date().getTime() / 1000;
    const difference = currentTime - timeInSeconds;
  
    if (difference < 3600) {
      return Math.floor(difference / 60) + 'm';
    } else if (difference < 86400) {
      return Math.floor(difference / 3600) + 'h';
    } else {
      return Math.floor(difference / 86400) + 'd';
    }
}

export const getLikeText = (likedUserNames) => {
  console.log('likedUserNames: ', likedUserNames)
  if (likedUserNames.length == 0) {
      return ''
  } else if (likedUserNames.length == 1) {
      return likedUserNames[0]
  } else if (likedUserNames.length == 2) {
      return likedUserNames[0] + ', ' + likedUserNames[1]
  } else if (likedUserNames.length > 2) {
      return likedUserNames[0] + ', ' + likedUserNames[1] + ' and ' + (likedUserNames.length - 2) + ' others'
  }
}


export const getEmotionFromState = (state, emotionData) => {
  for (let i=0; i<emotionData.length; i++) {
      if (emotionData[i].status === state) return emotionData[i]
  }
  return null
}