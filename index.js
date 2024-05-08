const writeCards = (array,event) => {
  const birthdayMessages = [];
  for(let i = 0; i < array.length; i++){
    birthdayMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return birthdayMessages;
}
