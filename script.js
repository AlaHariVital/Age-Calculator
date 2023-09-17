const btnEl = document.getElementById('calculate');
const inputEl = document.getElementById('birthday');
const resultEl = document.getElementById('result');

function calculateAge() {
  const birthDayValue = inputEl.value;
  if (birthDayValue === '') {
    alert('Please enter your BirthDay');
  } else {
    const age = getAge(birthDayValue);
    resultEl.innerText = `Your age is  ${age} ${
      age > 1 ? 'years' : 'year'
    } old`;
  }
}

function getAge(birthDayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthDayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();

  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnEl.addEventListener('click', calculateAge);
