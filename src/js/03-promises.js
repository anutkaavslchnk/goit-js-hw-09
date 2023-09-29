import Notiflix from 'notiflix';

const form = document.querySelector(".form");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const handleSubmit = (event) => {
  event.preventDefault();
  const amount = form.elements.amount.value;
  const delayFirst = parseFloat(form.elements.delay.value);
  const delayStep = parseFloat(form.elements.step.value);

  if (!isNaN(amount) && amount >= 1) {
    for (let i = 0; i < amount; i++) {
      const mixOfDelays = delayFirst + delayStep * i;
      createPromise(i, mixOfDelays)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }
};

form.addEventListener('submit', handleSubmit);
