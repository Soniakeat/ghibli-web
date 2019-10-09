'use strict';

const faqHeadingsNodes = document.querySelectorAll('.faq-heading');
const faqHeadings = [...faqHeadingsNodes];

const toggleFaqs = (event) => {
  console.dir(event.currentTarget); //console.dir para ver el objeto
  //usamos currentElement porque así cogerá el elemento que tiene el evento, y no sobre el que clicas (H4, arrow...)
  const faqArticle = event.currentTarget.parentElement;
  faqArticle.classList.toggle("toggle-faq-on");
}

faqHeadings.forEach(heading => {
  heading.addEventListener('click', toggleFaqs);
})
console.log(faqHeadings)
