// ============================================================================
// ParkEase Driver App — Discovery, Entry-Gate Map, UPI Booking & Digital QR Pass
// ============================================================================

const i18n = {
  en: {
    tagline: "New Delhi & Haryana • Pan-India Next",
    hero_title: "Guaranteed parking in Delhi & Haryana.",
    hero_sub: "Software-verified slots with exact entry-gate pins. Zero hardware delays.",
    active_pass: "My QR Pass",
    book_now: "Book Slot"
  },
  hi: {
    tagline: "नई दिल्ली और हरियाणा • जल्द पूरे भारत में",
    hero_title: "दिल्ली और हरियाणा में गारंटीड पार्किंग।",
    hero_sub: "सटीक एंट्री-गेट पिन के साथ सत्यापित स्लॉट।",
    active_pass: "मेरा QR पास",
    book_now: "बुक करें"
  }
};

let listings = [
  {
    id: "PE-DL-101",
    state: "DL",
    stateName: "New Delhi",
    title: "Saket J-Block Builder Floor Stilt",
    market: "dl-south",
    landmark: "Select Citywalk & Saket Metro",
    walkMins: 3,
    confidence: "reserved",
    confidenceLabel: "Reserved Quota",
    lastUpdated: "Synced live",
    covered: true,
    ev: true,
    heightLimit: "2.15m (Fits SUV)",
    gateCoords: "28.5286° N, 77.2193° E",
    gateInstructions: "Enter J-Block service lane opposite Saket Metro Gate 2; green sliding gate #44.",
    mapPos: { top: "40%", left: "34%" },
    rates: { hourly: 60, daily: 260, monthly: 4200 },
    quotas: {
      "2W": { total: 8, occupied: 3 },
      "4W": { total: 5, occupied: 2 },
      "SUV": { total: 2, occupied: 1 },
      "EV": { total: 2, occupied: 0 }
    }
  },
  {
    id: "PE-DL-102",
    state: "DL",
    stateName: "New Delhi",
    title: "Green Park Clinic Frontage (Near AIIMS)",
    market: "dl-central",
    landmark: "AIIMS Gate 1 & Safdarjung",
    walkMins: 4,
    confidence: "estimated",
    confidenceLabel: "Estimated",
    lastUpdated: "Updated 5m ago",
    covered: false,
    ev: false,
    heightLimit: "Open Sky",
    gateCoords: "28.5672° N, 77.2100° E",
    gateInstructions: "Turn left at Green Park Main Market red light; park inside yellow-marked clinic bay.",
    mapPos: { top: "28%", left: "70%" },
    rates: { hourly: 50, daily: 220, monthly: 3600 },
    quotas: {
      "2W": { total: 10, occupied: 4 },
      "4W": { total: 4, occupied: 2 },
      "SUV": { total: 2, occupied: 1 },
      "EV": { total: 0, occupied: 0 }
    }
  },
  {
    id: "PE-DL-103",
    state: "DL",
    stateName: "New Delhi",
    title: "Janpath Lane Rear Commercial Lot",
    market: "dl-central",
    landmark: "Connaught Place Outer Circle",
    walkMins: 3,
    confidence: "live",
    confidenceLabel: "Live Counter",
    lastUpdated: "Real-time webhook",
    covered: false,
    ev: true,
    heightLimit: "Open Lot",
    gateCoords: "28.6271° N, 77.2190° E",
    gateInstructions: "Entry from Tolstoy Marg cut towards Janpath; dedicated ParkEase lane on left.",
    mapPos: { top: "18%", left: "44%" },
    rates: { hourly: 70, daily: 300, monthly: 4800 },
    quotas: {
      "2W": { total: 18, occupied: 9 },
      "4W": { total: 10, occupied: 6 },
      "SUV": { total: 4, occupied: 2 },
      "EV": { total: 2, occupied: 1 }
    }
  },
  {
    id: "PE-HR-201",
    state: "HR",
    stateName: "Haryana",
    title: "Shanti Niketan RWA Basement B1",
    market: "hr-ggn",
    landmark: "DLF Cyber Hub Tower B, Gurugram",
    walkMins: 4,
    confidence: "reserved",
    confidenceLabel: "Reserved Quota",
    lastUpdated: "Synced live",
    covered: true,
    ev: true,
    heightLimit: "2.15m (Fits SUV)",
    gateCoords: "28.4951° N, 77.0888° E",
    gateInstructions: "Take service lane behind Tower B; enter via Society Gate 2 (Blue board).",
    mapPos: { top: "62%", left: "22%" },
    rates: { hourly: 50, daily: 240, monthly: 3800 },
    quotas: {
      "2W": { total: 10, occupied: 4 },
      "4W": { total: 6, occupied: 3 },
      "SUV": { total: 3, occupied: 1 },
      "EV": { total: 2, occupied: 1 }
    }
  },
  {
    id: "PE-HR-202",
    state: "HR",
    stateName: "Haryana",
    title: "CarePlus Diagnostic Courtyard (Sec-38)",
    market: "hr-ggn",
    landmark: "Medanta The Medicity Gate 2, Gurugram",
    walkMins: 2,
    confidence: "estimated",
    confidenceLabel: "Estimated",
    lastUpdated: "Updated 6m ago",
    covered: false,
    ev: false,
    heightLimit: "Open Sky",
    gateCoords: "28.4394° N, 77.0412° E",
    gateInstructions: "Turn left 80m before Medanta Gate 2 traffic light. Park inside yellow markings.",
    mapPos: { top: "79%", left: "44%" },
    rates: { hourly: 40, daily: 180, monthly: 3000 },
    quotas: {
      "2W": { total: 12, occupied: 5 },
      "4W": { total: 5, occupied: 3 },
      "SUV": { total: 2, occupied: 1 },
      "EV": { total: 0, occupied: 0 }
    }
  },
  {
    id: "PE-HR-203",
    state: "HR",
    stateName: "Haryana",
    title: "Sector 15 Market Rear Stilt Plaza",
    market: "hr-fbd",
    landmark: "Faridabad Sec-15 Market & Metro",
    walkMins: 3,
    confidence: "reserved",
    confidenceLabel: "Reserved Quota",
    lastUpdated: "Synced live",
    covered: true,
    ev: false,
    heightLimit: "2.10m",
    gateCoords: "28.3964° N, 77.3189° E",
    gateInstructions: "Enter from Sector 15A divider road beside Post Office; show ParkEase QR at booth.",
    mapPos: { top: "67%", left: "78%" },
    rates: { hourly: 35, daily: 150, monthly: 2500 },
    quotas: {
      "2W": { total: 15, occupied: 6 },
      "4W": { total: 8, occupied: 3 },
      "SUV": { total: 3, occupied: 1 },
      "EV": { total: 0, occupied: 0 }
    }
  }
];

let state = {
  theme: "light",
  lang: "en",
  vehicleType: "4W",
  vehicleNumber: "HR26 EQ 9012",
  selectedState: "all",
  selectedMarket: "all",
  searchQuery: "",
  duration: "hourly",
  filterCovered: false,
  filterEv: false,
  filterAvailable: true,
  selectedSpotId: "PE-DL-101",
  activeBooking: null
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  bindControls();
  renderAll();
});

function initTheme() {
  const saved = localStorage.getItem("parkease-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"), false);

  document.getElementById("themeToggle").addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark", true);
  });
}

function applyTheme(theme, persist = true) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").setAttribute("aria-checked", theme === "dark" ? "true" : "false");
  if (persist) localStorage.setItem("parkease-theme", theme);
}

function bindControls() {
  document.getElementById("langToggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "hi" : "en";
    document.getElementById("langToggle").textContent = state.lang === "en" ? "हिंदी" : "EN";
    renderAll();
  });

  document.getElementById("globalVehicleSelect").addEventListener("change", (e) => {
    const [type, num] = e.target.value.split(" • ");
    state.vehicleType = type;
    state.vehicleNumber = num;
    const icons = { "2W": "🏍️", "4W": "🚗", "SUV": "🚙", "EV": "⚡" };
    document.getElementById("activeVehicleIcon").textContent = icons[type] || "🚗";
    renderAll();
  });

  document.getElementById("myPassBtn").addEventListener("click", () => {
    if (!state.activeBooking) {
      showToast("Book a parking slot first to generate your QR pass.");
      return;
    }
    openQrPassModal();
  });

  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => document.getElementById(el.dataset.close).classList.add("hidden"));
  });

  document.querySelectorAll(".seg-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".seg-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedState = btn.dataset.state;
      renderListings();
    });
  });

  document.querySelectorAll(".market-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".market-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.selectedMarket = chip.dataset.market;
      renderListings();
    });
  });

  document.getElementById("landmarkSearch").addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderListings();
  });

  document.getElementById("durationFilter").addEventListener("change", (e) => {
    state.duration = e.target.value;
    renderAll();
  });

  document.getElementById("filterCovered").addEventListener("change", (e) => {
    state.filterCovered = e.target.checked;
    renderListings();
  });

  document.getElementById("filterEv").addEventListener("change", (e) => {
    state.filterEv = e.target.checked;
    renderListings();
  });

  document.getElementById("filterAvailable").addEventListener("change", (e) => {
    state.filterAvailable = e.target.checked;
    renderListings();
  });
}

function renderAll() {
  const dict = i18n[state.lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (dict[el.dataset.i18n]) el.textContent = dict[el.dataset.i18n];
  });
  renderListings();
  renderMapPreview();
}

function getAvailableSlots(spot, vehicleType) {
  const q = spot.quotas[vehicleType];
  return q ? Math.max(0, q.total - q.occupied) : 0;
}

function renderListings() {
  const container = document.getElementById("listingsContainer");
  const pinsContainer = document.getElementById("mapPinsContainer");
  container.innerHTML = "";
  pinsContainer.innerHTML = "";

  const filtered = listings.filter(spot => {
    if (state.selectedState !== "all" && spot.state !== state.selectedState) return false;
    if (state.selectedMarket !== "all" && spot.market !== state.selectedMarket) return false;
    if (state.filterCovered && !spot.covered) return false;
    if (state.filterEv && !spot.ev) return false;
    if (state.filterAvailable && getAvailableSlots(spot, state.vehicleType) <= 0) return false;
    if (state.searchQuery) {
      const hay = `${spot.title} ${spot.landmark} ${spot.stateName}`.toLowerCase();
      if (!hay.includes(state.searchQuery)) return false;
    }
    return true;
  });

  document.getElementById("resultsCount").textContent =
    `${filtered.length} verified spot${filtered.length === 1 ? "" : "s"} • ${state.vehicleType}`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="surface-card">
        <h3>No matching slots found</h3>
        <p class="card-sub">Try resetting your state, micro-market, or vehicle filters.</p>
      </div>`;
    return;
  }

  filtered.forEach(spot => {
    const avail = getAvailableSlots(spot, state.vehicleType);
    const rate = spot.rates[state.duration];
    const unit = state.duration === "hourly" ? "/hr" : state.duration === "daily" ? "/day" : "/mo";
    const isSelected = spot.id === state.selectedSpotId;

    const pin = document.createElement("button");
    pin.className = `map-pin ${isSelected ? "active" : ""}`;
    pin.style.top = spot.mapPos.top;
    pin.style.left = spot.mapPos.left;
    pin.textContent = `${spot.state} • ₹${rate}`;
    pin.addEventListener("click", () => {
      state.selectedSpotId = spot.id;
      renderListings();
      renderMapPreview();
    });
    pinsContainer.appendChild(pin);

    const card = document.createElement("article");
    card.className = `spot-card ${isSelected ? "selected" : ""}`;
    card.innerHTML = `
      <div class="spot-top-bar">
        <div class="spot-badges">
          <span class="state-tag ${spot.state.toLowerCase()}">${spot.stateName.toUpperCase()}</span>
          <span class="kyc-tag">✔ KYC & NOC</span>
        </div>
        <span class="conf-tag ${spot.confidence}">${spot.confidenceLabel}</span>
      </div>

      <h3 class="spot-name">${spot.title}</h3>
      <p class="spot-meta">${spot.walkMins} min walk to <strong>${spot.landmark}</strong></p>

      <div class="spot-specs-line">
        <span>${spot.covered ? "Covered" : "Open Air"}</span>
        <span class="spec-sep">•</span>
        <span>${spot.heightLimit}</span>
        <span class="spec-sep">•</span>
        <span>CCTV & Guard</span>
        ${spot.ev ? '<span class="spec-sep">•</span><span class="ev-highlight">⚡ EV Charging</span>' : ""}
      </div>

      <div class="spot-footer">
        <div class="price-wrap">
          <span class="price-amt">₹${rate}</span>
          <span class="price-unit">${unit}</span>
        </div>
        <div class="book-cluster">
          <span class="avail-text ${avail > 2 ? "ok" : avail > 0 ? "low" : "full"}">
            ${avail > 0 ? `${avail} free` : "Full"}
          </span>
          <button class="btn-primary btn-sm book-trigger" data-id="${spot.id}" ${avail === 0 ? "disabled" : ""}>
            ${i18n[state.lang].book_now}
          </button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".book-trigger")) {
        openBookingModal(spot.id);
        return;
      }
      state.selectedSpotId = spot.id;
      renderListings();
      renderMapPreview();
    });

    container.appendChild(card);
  });
}

function renderMapPreview() {
  const spot = listings.find(s => s.id === state.selectedSpotId) || listings[0];
  const avail = getAvailableSlots(spot, state.vehicleType);

  document.getElementById("selectedSpotPreview").innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
      <div>
        <strong style="font-size:1rem;">${spot.title}</strong>
        <p class="card-sub" style="margin-top:2px;">${spot.gateCoords} • ${spot.lastUpdated}</p>
      </div>
      <span class="state-tag ${spot.state.toLowerCase()}">${spot.stateName}</span>
    </div>

    <div class="gate-note">
      <strong>Last-100m Gate Pin:</strong> ${spot.gateInstructions}
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="avail-text ${avail > 0 ? "ok" : "full"}">${avail} ${state.vehicleType} slots available</span>
      <button class="btn-primary btn-sm" onclick="openBookingModal('${spot.id}')" ${avail === 0 ? "disabled" : ""}>
        Reserve Now
      </button>
    </div>
  `;
}

window.openBookingModal = function(spotId) {
  const spot = listings.find(s => s.id === spotId);
  if (!spot) return;

  const basePrice = spot.rates[state.duration];
  const platformFee = Math.round(basePrice * 0.08);
  const gst = Math.round(platformFee * 0.18);
  const total = basePrice + platformFee + gst;

  document.getElementById("modalSpotTitle").textContent = `Book ${state.vehicleType} Slot • ${spot.stateName}`;
  document.getElementById("bookingModalBody").innerHTML = `
    <p style="font-weight:700; font-size:0.96rem;">${spot.title}</p>
    <p class="card-sub">Vehicle: ${state.vehicleType} (${state.vehicleNumber}) • ${spot.heightLimit}</p>

    <div class="bill-box">
      <div class="bill-row"><span>Parking Tariff (${state.duration})</span><span>₹${basePrice}</span></div>
      <div class="bill-row"><span>Platform Convenience Fee</span><span>₹${platformFee}</span></div>
      <div class="bill-row"><span>GST (18% on fee)</span><span>₹${gst}</span></div>
      <div class="bill-row total"><span>Total Payable via UPI</span><span>₹${total}</span></div>
    </div>

    <p class="card-sub">Free cancellation up to 60 mins prior • 15-min no-show grace period.</p>

    <div class="modal-actions">
      <button class="btn-ghost" data-close="bookingModal">Cancel</button>
      <button class="btn-primary" id="confirmUpiPayBtn">Pay ₹${total} via UPI</button>
    </div>
  `;

  document.querySelectorAll("#bookingModal [data-close]").forEach(btn => {
    btn.addEventListener("click", () => document.getElementById("bookingModal").classList.add("hidden"));
  });

  document.getElementById("confirmUpiPayBtn").addEventListener("click", () => confirmBooking(spot, total));
  document.getElementById("bookingModal").classList.remove("hidden");
};

function confirmBooking(spot, totalAmount) {
  const quota = spot.quotas[state.vehicleType];
  if (quota && quota.occupied < quota.total) quota.occupied += 1;

  const code = `PE-${spot.state}-${Math.floor(1000 + Math.random() * 9000)}`;
  state.activeBooking = {
    bookingId: `BK-${spot.state}-${Date.now().toString().slice(-5)}`,
    spotId: spot.id,
    stateName: spot.stateName,
    spotTitle: spot.title,
    gateInstructions: spot.gateInstructions,
    vehicleType: state.vehicleType,
    vehicleNumber: state.vehicleNumber,
    amount: totalAmount,
    fallbackCode: code,
    status: "CONFIRMED"
  };

  document.getElementById("bookingModal").classList.add("hidden");
  document.getElementById("passBadge").classList.remove("hidden");
  renderAll();
  openQrPassModal();
  showToast("Booking confirmed! Offline QR pass ready.");
}

function openQrPassModal() {
  const b = state.activeBooking;
  if (!b) return;

  document.getElementById("qrPassBody").innerHTML = `
    <div class="qr-card">
      <span class="status-badge success">${b.status} • ${b.stateName.toUpperCase()}</span>
      <h4 style="margin-top:8px;">${b.spotTitle}</h4>
      <p class="card-sub">${b.vehicleType} • <strong>${b.vehicleNumber}</strong></p>

      <div class="qr-box">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#fff"/>
          <rect x="8" y="8" width="26" height="26" fill="none" stroke="#0f172a" stroke-width="5"/>
          <rect x="15" y="15" width="12" height="12" fill="#0d9488"/>
          <rect x="66" y="8" width="26" height="26" fill="none" stroke="#0f172a" stroke-width="5"/>
          <rect x="73" y="15" width="12" height="12" fill="#0d9488"/>
          <rect x="8" y="66" width="26" height="26" fill="none" stroke="#0f172a" stroke-width="5"/>
          <rect x="15" y="73" width="12" height="12" fill="#0d9488"/>
          <path d="M44 12h12v12H44zm0 24h24v12H44zm-28 12h16v12H16zm48 16h24v24H64zm-20 8h12v16H44z" fill="#0f172a"/>
        </svg>
      </div>

      <div class="pass-code">${b.fallbackCode}</div>
      <p class="card-sub">Show this QR or 6-digit code to gate guard</p>
    </div>

    <div class="gate-note">
      <strong>Gate Pin:</strong> ${b.gateInstructions}
    </div>

    <div class="modal-actions">
      <a class="btn-ghost" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.spotTitle + ' ' + b.stateName)}" target="_blank" rel="noopener">
        Google Maps ↗
      </a>
      <button class="btn-primary" data-close="qrPassModal">Done</button>
    </div>
  `;

  document.querySelectorAll("#qrPassModal [data-close]").forEach(btn => {
    btn.addEventListener("click", () => document.getElementById("qrPassModal").classList.add("hidden"));
  });
  document.getElementById("qrPassModal").classList.remove("hidden");
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}
