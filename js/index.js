const btn = document.getElementById('btnSubmit');
const scores = document.querySelectorAll('.score');
const mainCard = document.querySelector('.rating-card');
const thankyouCard = document.querySelector('.thankyou-card');
const givenRating = document.getElementById('givenRating');
let rating = '';
document.addEventListener('DOMContentLoaded', () => {
  mainCard.classList.add('show-rating');
  scores.forEach((score) => {
    score.addEventListener('click', (e) => {
      let activeScore = document.querySelector('.active-score');
      if (activeScore) {
        activeScore.classList.remove('active-score');
      }
      e.target.classList.add('active-score');
      rating = e.target.dataset.id;
      console.log(rating);
    });
  });

  btn.addEventListener('click', () => {
    if (rating) {
      mainCard.classList.remove('show-rating');
      thankyouCard.classList.add('showThankyou');
      givenRating.innerText = rating;
    }
  });
});
