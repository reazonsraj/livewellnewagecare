/* Injects shared nav and footer into every page */

const BASE = (()=>{
  const p = window.location.pathname;
  return p.includes('/services/') || p.includes('/aged-care') || p.includes('/about') || p.includes('/team') || p.includes('/gallery') || p.includes('/contact') || p.includes('/referral') ? '../' : './';
})();

document.getElementById('nav-placeholder').innerHTML = `
<nav>
  <a href="${BASE}index.html" class="logo">Live<em>Well</em> Support<small>Care And Support</small></a>
  <ul class="nav-links">
    <li class="has-dd">
      <a href="${BASE}services/index.html">Services</a>
      <div class="dropdown dd-services">
        <div class="dd-header">
          <span>All NDIS Services</span>
          <a href="${BASE}services/index.html">View all →</a>
        </div>
        <div class="dd-grid">
          <a href="${BASE}services/daily-activities.html" class="dd-item">
            <div class="dd-ico">🏠</div>
            <div><span class="dd-name">Daily Activities</span><span class="dd-sub">Personal care &amp; independence</span></div>
          </a>
          <a href="${BASE}services/community-participation.html" class="dd-item">
            <div class="dd-ico">🤝</div>
            <div><span class="dd-name">Community Participation</span><span class="dd-sub">Social engagement &amp; access</span></div>
          </a>
          <a href="${BASE}services/social-activities.html" class="dd-item">
            <div class="dd-ico">🎭</div>
            <div><span class="dd-name">Social Activities</span><span class="dd-sub">Groups, clubs &amp; programs</span></div>
          </a>
          <a href="${BASE}services/travel-transport.html" class="dd-item">
            <div class="dd-ico">🚗</div>
            <div><span class="dd-name">Travel &amp; Transport</span><span class="dd-sub">Safe reliable transport</span></div>
          </a>
          <a href="${BASE}services/domestic-assistance.html" class="dd-item">
            <div class="dd-ico">🧹</div>
            <div><span class="dd-name">Domestic Assistance</span><span class="dd-sub">Cleaning, meals &amp; home tasks</span></div>
          </a>
          <a href="${BASE}services/supported-independent-living.html" class="dd-item">
            <div class="dd-ico">🏡</div>
            <div><span class="dd-name">Supported Independent Living</span><span class="dd-sub">SIL housing &amp; accommodation</span></div>
          </a>
          <a href="${BASE}services/support-coordination.html" class="dd-item">
            <div class="dd-ico">📋</div>
            <div><span class="dd-name">Support Coordination</span><span class="dd-sub">NDIS plan &amp; fund management</span></div>
          </a>
          <a href="${BASE}services/capacity-building.html" class="dd-item">
            <div class="dd-ico">🌱</div>
            <div><span class="dd-name">Capacity Building</span><span class="dd-sub">Skills &amp; independence</span></div>
          </a>
          <a href="${BASE}services/respite-care.html" class="dd-item">
            <div class="dd-ico">😌</div>
            <div><span class="dd-name">Respite Care</span><span class="dd-sub">Relief for caregivers</span></div>
          </a>
        </div>
        <div class="dd-foot">
          <p>Not sure which service you need?</p>
          <a href="${BASE}contact.html" class="df-cta">Get in Touch →</a>
        </div>
      </div>
    </li>
    <li class="has-dd">
      <a href="${BASE}aged-care.html">Aged Care</a>
      <div class="dropdown dd-aged">
        <div class="dd-header">
          <span>Home Care Services</span>
          <a href="${BASE}aged-care.html">View all →</a>
        </div>
        <div class="dd-grid">
          <a href="${BASE}aged-care.html#personal-care" class="dd-item">
            <div class="dd-ico">🩺</div>
            <div><span class="dd-name">Personal Care</span><span class="dd-sub">Hygiene, grooming &amp; daily needs</span></div>
          </a>
          <a href="${BASE}aged-care.html#domestic" class="dd-item">
            <div class="dd-ico">🧹</div>
            <div><span class="dd-name">Domestic Support</span><span class="dd-sub">Cleaning, laundry &amp; meals</span></div>
          </a>
          <a href="${BASE}aged-care.html#social" class="dd-item">
            <div class="dd-ico">💬</div>
            <div><span class="dd-name">Social Support</span><span class="dd-sub">Companionship &amp; outings</span></div>
          </a>
          <a href="${BASE}aged-care.html#transport" class="dd-item">
            <div class="dd-ico">🚗</div>
            <div><span class="dd-name">Transport</span><span class="dd-sub">Appointments &amp; activities</span></div>
          </a>
          <a href="${BASE}aged-care.html#medication" class="dd-item">
            <div class="dd-ico">💊</div>
            <div><span class="dd-name">Medication Support</span><span class="dd-sub">Reminders &amp; health monitoring</span></div>
          </a>
          <a href="${BASE}aged-care.html#home" class="dd-item">
            <div class="dd-ico">🏡</div>
            <div><span class="dd-name">Home Maintenance</span><span class="dd-sub">Garden &amp; home tasks</span></div>
          </a>
        </div>
      </div>
    </li>
    <li><a href="${BASE}about.html">About Us</a></li>
    <li><a href="${BASE}team.html">Our Team</a></li>
    <li><a href="${BASE}gallery.html">Gallery</a></li>
    <li><a href="${BASE}contact.html">Contact</a></li>
    <li><a href="${BASE}referral.html" class="nav-cta">Refer a Client</a></li>
  </ul>
</nav>`;

document.getElementById('footer-placeholder').innerHTML = `
<div class="contact-bar">
  <div class="ct"><div class="ct-ico">📍</div><div><div class="ct-lbl">Our Office</div><div class="ct-val">36 Deane Crescent<br>Rosebery NT 0832</div></div></div>
  <div class="ct"><div class="ct-ico">📞</div><div><div class="ct-lbl">Call Us</div><div class="ct-val"><a href="tel:1800000000">1800 XXX XXX</a></div></div></div>
  <div class="ct"><div class="ct-ico">✉️</div><div><div class="ct-lbl">Email</div><div class="ct-val"><a href="mailto:hello@livewellsupport.com.au">hello@livewellsupport.com.au</a></div></div></div>
  <div class="ct"><div class="ct-ico">🕐</div><div><div class="ct-lbl">Office Hours</div><div class="ct-val">Mon–Fri: 8:00 AM – 4:00 PM<br><span style="font-size:12px;opacity:.45">We respond within 24h</span></div></div></div>
</div>
<footer>
  <div class="fg">
    <div>
      <div class="fb-logo">Live<em>Well</em> Support<small>Care And Support</small></div>
      <p class="fb-tag">A nationally registered NDIS provider delivering person-centred care across Darwin, Palmerston, Tiwi, and Casuarina.</p>
      <div class="fb-contacts">
        <a href="#">📍 36 Deane Crescent, Rosebery NT 0832</a>
        <a href="#">📞 1800 XXX XXX</a>
        <a href="#">✉️ hello@livewellsupport.com.au</a>
        <a href="#">🕐 Mon–Fri: 8:00 AM – 4:00 PM</a>
      </div>
    </div>
    <div class="fc"><h4>NDIS Services</h4><ul>
      <li><a href="${BASE}services/daily-activities.html">Daily Activities</a></li>
      <li><a href="${BASE}services/community-participation.html">Community Participation</a></li>
      <li><a href="${BASE}services/supported-independent-living.html">Supported Independent Living</a></li>
      <li><a href="${BASE}services/support-coordination.html">Support Coordination</a></li>
      <li><a href="${BASE}services/travel-transport.html">Travel &amp; Transport</a></li>
      <li><a href="${BASE}services/domestic-assistance.html">Domestic Assistance</a></li>
      <li><a href="${BASE}services/capacity-building.html">Capacity Building</a></li>
      <li><a href="${BASE}services/respite-care.html">Respite Care</a></li>
      <li><a href="${BASE}services/social-activities.html">Social Activities</a></li>
    </ul></div>
    <div class="fc"><h4>Aged Care</h4><ul>
      <li><a href="${BASE}aged-care.html">Home Care Services</a></li>
      <li><a href="${BASE}aged-care.html#personal-care">Personal Care</a></li>
      <li><a href="${BASE}aged-care.html#domestic">Domestic Support</a></li>
      <li><a href="${BASE}aged-care.html#social">Social Support</a></li>
      <li><a href="${BASE}aged-care.html#transport">Transport</a></li>
      <li><a href="${BASE}aged-care.html#medication">Medication Support</a></li>
    </ul></div>
    <div class="fc"><h4>Company</h4><ul>
      <li><a href="${BASE}about.html">About Us</a></li>
      <li><a href="${BASE}team.html">Our Team</a></li>
      <li><a href="${BASE}gallery.html">Gallery</a></li>
      <li><a href="${BASE}referral.html">Refer a Client</a></li>
      <li><a href="${BASE}contact.html">Contact Us</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Complaints Policy</a></li>
    </ul></div>
  </div>
  <div class="fb2">
    <span class="fb2-copy">© 2025 Live Well Care And Support Pty Ltd. All rights reserved.</span>
    <div class="fb2-badges">
      <span class="fbadge g">NDIS Registered</span>
      <span class="fbadge">Aged Care Provider</span>
      <span class="fbadge">NDIS Practice Standards</span>
    </div>
  </div>
</footer>`;

// Dropdown hover with delay — applies to all .has-dd items (Services + Aged Care)
document.querySelectorAll('.has-dd').forEach(li => {
  const dd = li.querySelector('.dropdown');
  let timer;
  function open()  { clearTimeout(timer); dd.classList.add('open'); li.classList.add('dd-open'); }
  function close() { timer = setTimeout(() => { dd.classList.remove('open'); li.classList.remove('dd-open'); }, 400); }
  li.addEventListener('mouseenter', open);
  li.addEventListener('mouseleave', close);
  dd.addEventListener('mouseenter', () => clearTimeout(timer));
  dd.addEventListener('mouseleave', close);
});

// Scroll reveal
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on'); });
},{threshold:0.07});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
