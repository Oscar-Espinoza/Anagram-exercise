module.exports = function (str1, str2) {

  let isAnagram = true

  str1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().toString().replace(/,/g, '')
  str2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().toString().replace(/,/g, '') 
  
  if(str1 === str2) {
    return isAnagram
  } else {
    return !isAnagram
  }
}
