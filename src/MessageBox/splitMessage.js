const trim = (str) => {
  if (!str) {
    return '';
  }
  return str.trim().replace(/ +/g, ' ');
};

const splitStringIntoChunk = (splitString, numberDigitPages = 1) => {
  const defaultPrefix = numberDigitPages + 2;
  let lengthCharacter = 0;
  const resultString = [];
  let currentPart = [];
  let isError = false;
  splitString.forEach((element, index) =>  {
    const currentPrefix = defaultPrefix + (resultString.length + 1).toString().length;
    const prefixLength = 50 - currentPrefix;
    if (element.length > prefixLength) {
      isError = true;
    }
    else {
      lengthCharacter += element.length;
      if (lengthCharacter <= prefixLength) {
        currentPart.push(element);
        lengthCharacter += 1;
      } else {
        lengthCharacter = element.length + 1;
        resultString.push(currentPart);
        currentPart = [element];
      }
      if (index === splitString.length - 1) {
        resultString.push(currentPart);
      }
    }
  });

  return isError || resultString;
};

const generateResult = (partialArray) => {
  const finalResult = [];
  let error = false;

  for (let i = 0; i < partialArray.length; i++) {
    const tempString = `${i+1}/${partialArray.length} ${partialArray[i].join(' ')}`;
    if (tempString.length > 50) {
      error = true;
      break;
    } else {
      finalResult.push(tempString);
    }
  }

  return error || finalResult;
};

const decideNumberPage = (number) => {
  if (number > 4463) {
    return 3;
  } else {
    if (number > 422) {
      return 2
    } else {
      return 1;
    }
  }
};

const splitMessage = (message) => {
  const trimMessage = trim(message);
  const splitString = trimMessage.split(' ');
  const initialPageNumber = decideNumberPage(trimMessage.length);
  const result = splitStringIntoChunk(splitString, initialPageNumber);
  if (!Array.isArray(result)) {
    return ['Message got an error'];
  }
  const verifyResult = generateResult(result);
  if (result.length.toString().length > initialPageNumber || !Array.isArray(verifyResult)) {
    return generateResult(splitStringIntoChunk(splitString, initialPageNumber + 1));
  }

  return verifyResult;
};

export default { splitMessage };
