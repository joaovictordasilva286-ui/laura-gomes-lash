// DADOS EDITÁVEIS: preencha os campos entre aspas quando receber as informações da cliente.
const siteData = {
  whatsapp: "554691257458", // DDI + DDD + número, somente dígitos
  instagram: "https://instagram.com/lashbylauragomes",
  instagramLabel: "@lashbylauragomes",
  bookingMessage: "Olá, Laura! Gostaria de agendar um horário e saber mais sobre os procedimentos."
};

const waHref = siteData.whatsapp
  ? `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.bookingMessage)}`
  : "#contato";
document.querySelectorAll('.whatsapp-link').forEach(link => link.href = waHref);
document.querySelectorAll('.whatsapp-display').forEach(el => el.textContent = siteData.whatsapp ? `+${siteData.whatsapp}` : "Adicionar número");
document.querySelectorAll('.instagram-link').forEach(link => {
  if (siteData.instagram) link.href = siteData.instagram;
});
document.querySelectorAll('.instagram-display').forEach(el => el.textContent = siteData.instagram ? siteData.instagramLabel : "Adicionar perfil");
document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
