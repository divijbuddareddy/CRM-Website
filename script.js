/* ==========================================================================
   AI Automation Labs - Landing Page Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // GOOGLE SHEETS CONNECTION
  // =========================================================================

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzuNE4JrQfEsPXheFQ88FFxr3nDk9pLn3lJ3rXz8Yf3UUHrIxq3Ub448azzHJ9VBJSR/exec";


  // =========================================================================
  // 1. NAVBAR SCROLL ACTIVE LINK OBSERVER
  // =========================================================================

  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let currentScroll = window.scrollY + 130;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        currentScroll >= sectionTop &&
        currentScroll < sectionTop + sectionHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active');

          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);


  // =========================================================================
  // 2. CHAOS VS CLARITY VISUAL SWITCHER
  // =========================================================================

  const toggleChaosBtn = document.getElementById('toggle-chaos');
  const toggleClarityBtn = document.getElementById('toggle-clarity');
  const comparisonContainer = document.getElementById('comparison-container');

  const chaosData = [
    {
      dept: "Sales says",
      text: '"We confirmed delivery."'
    },
    {
      dept: "Production says",
      text: '"We never got the job."'
    },
    {
      dept: "Purchase says",
      text: '"We didn\'t know material was required."'
    },
    {
      dept: "Inventory says",
      text: '"We don\'t have stock."'
    },
    {
      dept: "Accounts says",
      text: '"The payment is still pending."'
    },
    {
      dept: "Management asks",
      text: '"What is happening?" ➔ Nobody knows.'
    }
  ];

  const clarityData = [
    {
      dept: "Sales AI",
      text: "⚡ AI automatically logged enquiry and generated verified quotation in 3 mins."
    },
    {
      dept: "Production AI",
      text: "⚡ Job card auto-dispatched to shopfloor station with digital checklist."
    },
    {
      dept: "Purchase AI",
      text: "⚡ Predictive buffer alert auto-generated PO 48 hours before shortage."
    },
    {
      dept: "Inventory AI",
      text: "⚡ Barcode scanned material issue tracked live on mobile app."
    },
    {
      dept: "Accounts AI",
      text: "⚡ Automated Tally Prime sync generated GST invoice upon gatepass approval."
    },
    {
      dept: "Management AI",
      text: "⚡ Real-time executive dashboard displays 94.8% OEE from anywhere."
    }
  ];

  function renderComparison(mode) {

    if (!comparisonContainer) return;

    comparisonContainer.innerHTML = '';

    const isChaos = mode === 'chaos';
    const items = isChaos ? chaosData : clarityData;

    items.forEach(item => {

      const card = document.createElement('div');

      card.className =
        `comp-card ${isChaos ? 'chaos-mode' : 'clarity-mode'}`;

      card.innerHTML = `
        <div class="comp-dept">${item.dept}</div>
        <div class="comp-text">${item.text}</div>
      `;

      comparisonContainer.appendChild(card);

    });
  }

  if (toggleChaosBtn && toggleClarityBtn) {

    toggleChaosBtn.addEventListener('click', () => {

      toggleChaosBtn.className =
        'toggle-btn active chaos';

      toggleClarityBtn.className =
        'toggle-btn';

      renderComparison('chaos');

    });

    toggleClarityBtn.addEventListener('click', () => {

      toggleClarityBtn.className =
        'toggle-btn active clarity';

      toggleChaosBtn.className =
        'toggle-btn';

      renderComparison('clarity');

    });

    renderComparison('clarity');
  }


  // =========================================================================
  // 3. INTERACTIVE HOTSPOT CHIPS
  // =========================================================================

  const hotspots =
    document.querySelectorAll('.hotspot-chip');

  hotspots.forEach(chip => {

    chip.addEventListener('click', () => {

      const info =
        chip.getAttribute('data-info');

      alert(
        `🤖 AI Smart Sensor Telemetry:\n\n${info}`
      );

    });

  });


  // =========================================================================
  // 4. COMMAND CENTER DASHBOARD TABS
  // =========================================================================

  const dashTabs =
    document.querySelectorAll('.d-tab');

  const stat1 =
    document.getElementById('m-stat-1');

  const stat2 =
    document.getElementById('m-stat-2');

  const stat3 =
    document.getElementById('m-stat-3');

  const stat4 =
    document.getElementById('m-stat-4');

  const dashMetrics = {

    overview: {
      s1: '94.8%',
      s2: '18 / 20',
      s3: '142 Units',
      s4: '₹4.2L Saved'
    },

    production: {
      s1: '97.2%',
      s2: '20 / 20 Active',
      s3: '188 Units',
      s4: '100% Quality'
    },

    inventory: {
      s1: '99.1%',
      s2: '12 Raw Categories',
      s3: '0 Shortages',
      s4: '₹8.5L Buffer'
    },

    dispatch: {
      s1: '99.5%',
      s2: '45 Vehicles',
      s3: '100% Dispatched',
      s4: '₹24.8L Billed'
    }

  };

  dashTabs.forEach(tab => {

    tab.addEventListener('click', () => {

      dashTabs.forEach(t =>
        t.classList.remove('active')
      );

      tab.classList.add('active');

      const key =
        tab.getAttribute('data-tab');

      if (dashMetrics[key]) {

        if (stat1)
          stat1.textContent = dashMetrics[key].s1;

        if (stat2)
          stat2.textContent = dashMetrics[key].s2;

        if (stat3)
          stat3.textContent = dashMetrics[key].s3;

        if (stat4)
          stat4.textContent = dashMetrics[key].s4;

      }

    });

  });


  // =========================================================================
  // 5. AI COPILOT PLAYGROUND
  // =========================================================================

  const chatBox =
    document.getElementById('chat-box');

  const pBtns =
    document.querySelectorAll('.p-btn');

  const aiAnswers = {

    "What orders are delayed?":
      "⚡ **AI Analysis:** Zero production delays today! Order #PO-8942 is 92% complete and scheduled for dispatch at 4:30 PM.",

    "Show raw material stock alert":
      "⚠️ **Inventory Alert:** MS Sheet 2mm stock will dip below threshold in 48 hrs. AI has pre-drafted a PO for JSW Steel.",

    "Which machine needs maintenance?":
      "⚙️ **Machine Telemetry:** CNC Lathe #3 exhibits 4.2% vibration anomaly. Predictive maintenance scheduled for tonight's shift change.",

    "Generate today's dispatch summary":
      "📦 **Dispatch Summary:** 142 units dispatched across 6 clients. Total billing generated: ₹24,80,000 with WhatsApp delivery tracking links sent."

  };

  pBtns.forEach(btn => {

    btn.addEventListener('click', () => {

      const query =
        btn.textContent.trim();

      const userBubble =
        document.createElement('div');

      userBubble.className =
        'c-bubble user';

      userBubble.textContent =
        query;

      chatBox.appendChild(userBubble);

      chatBox.scrollTop =
        chatBox.scrollHeight;

      setTimeout(() => {

        const aiBubble =
          document.createElement('div');

        aiBubble.className =
          'c-bubble ai';

        const raw =
          aiAnswers[query] ||
          "⚡ Querying factory telemetry...";

        aiBubble.innerHTML =
          raw.replace(
            /\*\*(.*?)\*\*/g,
            '<strong>$1</strong>'
          );

        chatBox.appendChild(aiBubble);

        chatBox.scrollTop =
          chatBox.scrollHeight;

      }, 400);

    });

  });


  // =========================================================================
  // 6. ROI PROFIT LEAK CALCULATOR
  // =========================================================================

  const roiRange =
    document.getElementById('roi-range');

  const roiValLabel =
    document.getElementById('roi-val-label');

  const roiAmount =
    document.getElementById('roi-amount');

  function updateRoi() {

    if (!roiRange) return;

    const cr =
      parseFloat(roiRange.value);

    roiValLabel.textContent =
      `₹ ${cr} Crore`;

    const lossLakhs =
      Math.round(cr * 4.5 * 10) / 10;

    roiAmount.textContent =
      `₹ ${lossLakhs} Lakhs / Year`;
  }

  if (roiRange) {

    roiRange.addEventListener(
      'input',
      updateRoi
    );

    updateRoi();

  }


  // =========================================================================
  // 7. FAQ ACCORDION
  // =========================================================================

  const faqBoxes =
    document.querySelectorAll('.faq-box');

  faqBoxes.forEach(box => {

    const btn =
      box.querySelector('.faq-btn');

    if (!btn) return;

    btn.addEventListener('click', () => {

      const active =
        box.classList.contains('active');

      faqBoxes.forEach(fb =>
        fb.classList.remove('active')
      );

      if (!active)
        box.classList.add('active');

    });

  });


  // =========================================================================
  // 8. FACTORY GROWTH AUDIT MODAL
  // =========================================================================

  const modalOverlay =
    document.getElementById('audit-modal');

  const openModalBtns =
    document.querySelectorAll('.open-audit-modal');

  const closeModalBtn =
    document.getElementById('close-modal');

  const auditForm =
    document.getElementById('audit-form');

  openModalBtns.forEach(b => {

    b.addEventListener('click', (e) => {

      e.preventDefault();

      if (modalOverlay)
        modalOverlay.classList.add('active');

    });

  });

  if (closeModalBtn) {

    closeModalBtn.addEventListener('click', () => {

      if (modalOverlay)
        modalOverlay.classList.remove('active');

    });

  }

  if (modalOverlay) {

    modalOverlay.addEventListener('click', (e) => {

      if (e.target === modalOverlay)
        modalOverlay.classList.remove('active');

    });

  }


  // =========================================================================
  // 9. AUDIT FORM → GOOGLE SHEETS
  // =========================================================================

  if (auditForm) {

    auditForm.addEventListener(
      'submit',
      async (e) => {

        e.preventDefault();

        const name =
          document.getElementById('f-name')
            .value.trim();

        const phone =
          document.getElementById('f-phone')
            .value.trim();

        const company =
          document.getElementById('f-company')
            .value.trim();

        const turnover =
          document.getElementById('f-turnover')
            .value;

        const modalCard =
          document.querySelector(
            '#audit-modal .modal-card'
          );

        const submitButton =
          auditForm.querySelector(
            'button[type="submit"]'
          );

        if (submitButton) {

          submitButton.disabled = true;

          submitButton.textContent =
            'Submitting...';

        }

        try {

          await fetch(
            GOOGLE_SCRIPT_URL,
            {
              method: 'POST',

              mode: 'no-cors',

              headers: {
                'Content-Type':
                  'text/plain;charset=utf-8'
              },

              body: JSON.stringify({

                formType:
                  'Factory Growth Audit',

                name:
                  name,

                email:
                  '',

                phone:
                  phone,

                company:
                  company,

                turnover:
                  turnover,

                message:
                  ''

              })
            }
          );


          // SUCCESS MESSAGE

          if (modalCard) {

            modalCard.innerHTML = `

              <div style="
                text-align: center;
                padding: 20px;
              ">

                <div style="
                  width: 64px;
                  height: 64px;
                  background: rgba(0,240,255,0.15);
                  color: #00F0FF;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 2.2rem;
                  margin: 0 auto 20px auto;
                  border: 2px solid #00F0FF;
                  box-shadow:
                    0 0 25px rgba(0,240,255,0.4);
                ">
                  ✓
                </div>

                <h3 style="
                  font-size: 1.8rem;
                  margin-bottom: 12px;
                  color: #FFF;
                ">
                  Audit Reserved, ${name}!
                </h3>

                <p style="
                  color: #94A3B8;
                  font-size: 1.05rem;
                  margin-bottom: 24px;
                ">
                  Dr. Ajay Kumar and our AI Senior
                  Solutions Architect will contact you
                  within 4 business hours to schedule
                  your ₹50,000 Factory Profit Leak Audit.
                </p>

                <button
                  class="btn btn-orange"
                  onclick="
                    document
                      .getElementById('audit-modal')
                      .classList.remove('active');
                    location.reload();
                  "
                >
                  Done
                </button>

              </div>

            `;

          }

        } catch (error) {

          console.error(
            'Google Sheets submission error:',
            error
          );

          if (submitButton) {

            submitButton.disabled = false;

            submitButton.textContent =
              'Submit';

          }

          alert(
            'There was a problem submitting your application. Please try again.'
          );

        }

      }
    );

  }


  // =========================================================================
  // 10. CONTACT US MODAL
  // =========================================================================

  const contactModalOverlay =
    document.getElementById('contact-modal');

  const openContactModalBtns =
    document.querySelectorAll(
      '.open-contact-modal'
    );

  const closeContactModalBtn =
    document.getElementById(
      'close-contact-modal'
    );

  const contactForm =
    document.getElementById('contact-form');

  openContactModalBtns.forEach(b => {

    b.addEventListener('click', (e) => {

      e.preventDefault();

      if (contactModalOverlay)
        contactModalOverlay.classList.add('active');

    });

  });

  if (closeContactModalBtn) {

    closeContactModalBtn.addEventListener(
      'click',
      () => {

        if (contactModalOverlay)
          contactModalOverlay.classList.remove(
            'active'
          );

      }
    );

  }

  if (contactModalOverlay) {

    contactModalOverlay.addEventListener(
      'click',
      (e) => {

        if (e.target === contactModalOverlay) {

          contactModalOverlay.classList.remove(
            'active'
          );

        }

      }
    );

  }


  // =========================================================================
  // 11. CONTACT FORM → GOOGLE SHEETS
  // =========================================================================

  if (contactForm) {

    contactForm.addEventListener(
      'submit',
      async (e) => {

        e.preventDefault();

        const name =
          document.getElementById('c-name')
            .value.trim();

        const email =
          document.getElementById('c-email')
            .value.trim();

        const phone =
          document.getElementById('c-phone')
            .value.trim();

        const message =
          document.getElementById('c-message')
            .value.trim();

        const modalCard =
          document.querySelector(
            '#contact-modal .modal-card'
          );

        const submitButton =
          contactForm.querySelector(
            'button[type="submit"]'
          );

        if (submitButton) {

          submitButton.disabled = true;

          submitButton.textContent =
            'Submitting...';

        }

        try {

          await fetch(
            GOOGLE_SCRIPT_URL,
            {
              method: 'POST',

              mode: 'no-cors',

              headers: {
                'Content-Type':
                  'text/plain;charset=utf-8'
              },

              body: JSON.stringify({

                formType:
                  'Contact Us',

                name:
                  name,

                email:
                  email,

                phone:
                  phone,

                company:
                  '',

                turnover:
                  '',

                message:
                  message

              })
            }
          );


          // SUCCESS MESSAGE

          if (modalCard) {

            modalCard.innerHTML = `

              <div style="
                text-align: center;
                padding: 20px;
              ">

                <div style="
                  width: 64px;
                  height: 64px;
                  background: rgba(0,240,255,0.15);
                  color: #00F0FF;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 2.2rem;
                  margin: 0 auto 20px auto;
                  border: 2px solid #00F0FF;
                  box-shadow:
                    0 0 25px rgba(0,240,255,0.4);
                ">
                  ✓
                </div>

                <h3 style="
                  font-size: 1.8rem;
                  margin-bottom: 12px;
                  color: #FFF;
                ">
                  Thank You, ${name}!
                </h3>

                <p style="
                  color: #94A3B8;
                  font-size: 1.05rem;
                  margin-bottom: 24px;
                ">
                  Your message has been received.
                  Our team will get back to you shortly.
                </p>

                <button
                  class="btn btn-orange"
                  onclick="
                    document
                      .getElementById('contact-modal')
                      .classList.remove('active');
                    location.reload();
                  "
                >
                  Done
                </button>

              </div>

            `;

          }

        } catch (error) {

          console.error(
            'Google Sheets submission error:',
            error
          );

          if (submitButton) {

            submitButton.disabled = false;

            submitButton.textContent =
              'Submit';

          }

          alert(
            'There was a problem submitting your message. Please try again.'
          );

        }

      }
    );

  }

});
