const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.classList.add('contact-info', 'd-flex', 'col', 'd-off');
contactSection.innerHTML = `<h2 class="section-title">Contact information</h2>
     <p> Do you have a question or you just want to say <q>Hii</q>? <br />
         You can reachout to us: </p>
      <ul>
        <li>Our e-mail: alimonyg@mail.com</li>
        <li>Our phone number: +256783608030/+256757431323</li>
        <li>Our address: Kakira Sugar Limited, 121 Jinja City, Country: Uganda</li>
      </ul>`;

export default contactSection;
