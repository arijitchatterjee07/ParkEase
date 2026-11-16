// ============================================================================
// ParkEase NCR — Clean Interactive Prototype (New Delhi & Haryana)
// ============================================================================

const i18n = {
  en: {
    tagline: "New Delhi & Haryana • Pan-India Next",
    nav_driver: "Driver App",
    nav_owner: "Owner & Guard",
    nav_admin: "Trust & Ops",
    nav_blueprint: "Roadmap & Stack",
    hero_title: "Guaranteed parking in Delhi & Haryana.",
    hero_sub: "Software-verified slots with exact entry-gate pins. Zero hardware delays.",
    active_pass: "QR Pass",
    book_now: "Book Slot"
  },
  hi: {
    tagline: "नई दिल्ली और हरियाणा • जल्द पूरे भारत में",
    nav_driver: "ड्राइवर ऐप",
    nav_owner: "मालिक और गार्ड",
    nav_admin: "ट्रस्ट और ऑप्स",
    nav_blueprint: "रोडमैप और स्टैक",
    hero_title: "दिल्ली और हरियाणा में गारंटीड पार्किंग।",
    hero_sub: "सटीक एंट्री-गेट पिन के साथ सत्यापित स्लॉट।",
    active_pass: "QR पास",
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
    type: "Builder Floor Stilt",
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
    type: "Clinic Frontage",
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
    type: "Commercial Lot",
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
    type: "Society Spare Slot",
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
    type: "Clinic Frontage",
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
    type: "Commercial Lot",
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

let pendingApprovals = [
  {
    id: "KYC-DL-304",
    state: "DL",
    stateName: "New Delhi",
    ownerName: "Vikramaditya Kapoor",
    title: "C-14 Hauz Khas Enclave Ground Stilt",
    market: "dl-south",
    type: "Builder Floor Stilt",
    panStatus: "PAN Verified",
    nocStatus: "Hauz Khas RWA NOC",
    hourly: 55,
    slots: 2,
    height: "2.1m",
    instructions: "Enter via Gate 1 opposite Deer Park side lane; second stilt bay."
  },
  {
    id: "KYC-HR-309",
    state: "HR",
    stateName: "Haryana",
    ownerName: "Rajeshwar Malhotra",
    title: "A-19 Rosewood City Stilt, Gurugram",
    market: "hr-ggn",
    type: "Society Spare Slot",
    panStatus: "PAN Verified",
    nocStatus: "Gurugram RWA NOC",
    hourly: 40,
    slots: 2,
    height: "2.1m",
    instructions: "Enter via Rosewood Gate 3; second house on right."
  }
];

let state = {
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
  activeBooking: null,
  ownerLotFull: false,
  ledger: {
    gross: 18450,
    commissionRate: 0.15,
    gstRate: 0.18
  }
};

document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  bindFilters();
  bindOwnerActions();
  renderAll();
});

function bindNavigation() {
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".view-section").forEach(v => v.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`view-${tab.dataset.view}`).classList.add("active");
    });
  });

  document.getElementById("langToggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "hi" : "en";
    document.getElementById("langToggle").textContent = state.lang === "en" ? "हिंदी" : "EN";
    applyTranslations();
    renderListings();
    renderMapPreview();
  });

  document.getElementById("globalVehicleSelect").addEventListener("change", (e) => {
    const [type, num] = e.target.value.split(" • ");
    state.vehicleType = type;
    state.vehicleNumber = num;
    const icons = { "2W": "🏍️", "4W": "🚗", "SUV": "🚙", "EV": "⚡" };
    document.getElementById("activeVehicleIcon").textContent = icons[type] || "🚗";
    renderListings();
    renderMapPreview();
  });

  document.getElementById("myPassBtn").addEventListener("click", () => {
    if (!state.activeBooking) {
      showToast("Book a parking slot first to generate your QR pass.");
      return;
    }
    openQrPassModal();
  });

  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => {
      document.getElementById(el.dataset.close).classList.add("hidden");
    });
  });
}

function bindFilters() {
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
    renderListings();
    renderMapPreview();
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

function bindOwnerActions() {
  document.getElementById("emergencyFullToggle").addEventListener("change", (e) => {
    state.ownerLotFull = e.target.checked;
    renderAll();
    showToast(state.ownerLotFull ? "Lot marked FULL across NCR map" : "Lot reopened");
  });

  document.getElementById("openOnboardModalBtn").addEventListener("click", () => {
    document.getElementById("onboardModal").classList.remove("hidden");
  });

  document.getElementById("onboardForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const st = document.getElementById("newState").value;
    const stName = st === "DL" ? "New Delhi" : "Haryana";
    pendingApprovals.unshift({
      id: `KYC-${st}-${Math.floor(300 + Math.random() * 600)}`,
      state: st,
      stateName: stName,
      ownerName: "Arijit Chatterjee",
      title: document.getElementById("newTitle").value,
      market: document.getElementById("newMarket").value,
      type: document.getElementById("newType").value,
      panStatus: "PAN Verified",
      nocStatus: `${stName} RWA NOC`,
      hourly: Number(document.getElementById("newHourlyRate").value),
      slots: Number(document.getElementById("newSlots").value),
      height: document.getElementById("newHeight").value,
      instructions: document.getElementById("newInstructions").value
    });
    document.getElementById("onboardModal").classList.add("hidden");
    e.target.reset();
    renderAdminQueues();
    showToast(`Submitted ${stName} listing to Trust & Ops Queue`);
  });

  document.getElementById("fillActiveCodeBtn").addEventListener("click", () => {
    if (!state.activeBooking) {
      showToast("Book a slot in Driver App first.");
      return;
    }
    document.getElementById("manualCodeInput").value = state.activeBooking.fallbackCode;
  });

  document.getElementById("verifyCheckInBtn").addEventListener("click", handleGuardScan);
}

function renderAll() {
  applyTranslations();
  renderListings();
  renderMapPreview();
  renderOwnerConsole();
  renderAdminQueues();
}

function applyTranslations() {
  const dict = i18n[state.lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
}

function getAvailableSlots(spot, vehicleType) {
  if (state.ownerLotFull && spot.id === "PE-HR-201") return 0;
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
    `${filtered.length} verified spot${filtered.length === 1 ? "" : "s"} for ${state.vehicleType}`;

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
      <div class="spot-header">
        <div>
          <div class="spot-badges">
            <span class="state-tag ${spot.state.toLowerCase()}">${spot.stateName.toUpperCase()}</span>
            <span class="kyc-tag">✔ KYC & NOC</span>
          </div>
          <h3 class="spot-name">${spot.title}</h3>
          <p class="spot-meta">${spot.walkMins} min walk to <strong>${spot.landmark}</strong></p>
        </div>
        <span class="conf-tag ${spot.confidence}">${spot.confidenceLabel}</span>
      </div>

      <div class="spot-specs">
        <span class="spec-pill">${spot.covered ? "Covered" : "Open Air"}</span>
        <span class="spec-pill">${spot.heightLimit}</span>
        <span class="spec-pill">CCTV & Guard</span>
        ${spot.ev ? '<span class="spec-pill">⚡ EV Point</span>' : ""}
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
        <strong style="font-size:0.98rem;">${spot.title}</strong>
        <p class="card-sub">${spot.gateCoords} • ${spot.lastUpdated}</p>
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

  state.ledger.gross += totalAmount;
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
      <p class="card-sub">Offline basement verification code</p>
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

function renderOwnerConsole() {
  const spot = listings.find(s => s.id === "PE-HR-201") || listings[0];
  const container = document.getElementById("ownerInventoryControls");
  container.innerHTML = "";

  Object.entries(spot.quotas).forEach(([vType, data]) => {
    const row = document.createElement("div");
    row.className = "quota-row";
    row.innerHTML = `
      <div>
        <strong>${vType} Pool</strong>
        <p class="card-sub">${data.occupied} of ${data.total} occupied</p>
      </div>
      <div class="stepper">
        <button class="step-btn" onclick="adjustSlot('${vType}', -1)">-</button>
        <strong>${data.total - data.occupied} free</strong>
        <button class="step-btn" onclick="adjustSlot('${vType}', 1)">+</button>
      </div>
    `;
    container.appendChild(row);
  });

  const gross = state.ledger.gross;
  const comm = Math.round(gross * state.ledger.commissionRate);
  const gst = Math.round(comm * state.ledger.gstRate);
  const net = gross - comm - gst;

  document.getElementById("ownerGrossKpi").textContent = `₹${gross.toLocaleString("en-IN")}`;
  document.getElementById("ownerCommKpi").textContent = `- ₹${comm.toLocaleString("en-IN")}`;
  document.getElementById("ownerGstKpi").textContent = `- ₹${gst.toLocaleString("en-IN")}`;
  document.getElementById("ownerNetKpi").textContent = `₹${net.toLocaleString("en-IN")}`;
}

window.adjustSlot = function(vType, delta) {
  const spot = listings.find(s => s.id === "PE-HR-201") || listings[0];
  const q = spot.quotas[vType];
  q.occupied = Math.min(q.total, Math.max(0, q.occupied + delta));
  renderAll();
};

function handleGuardScan() {
  const input = document.getElementById("manualCodeInput").value.trim().toUpperCase();
  const log = document.getElementById("scanResultLog");

  if (!state.activeBooking || input !== state.activeBooking.fallbackCode) {
    log.innerHTML = `<span style="color:var(--danger); font-weight:600;">Invalid code. Check driver pass.</span>`;
    return;
  }

  if (state.activeBooking.status === "CONFIRMED") {
    state.activeBooking.status = "CHECKED_IN";
    log.innerHTML = `<span style="color:var(--success); font-weight:600;">✔ Checked in ${state.activeBooking.vehicleNumber} at ${new Date().toLocaleTimeString()}</span>`;
    showToast("Entry verified offline");
  } else if (state.activeBooking.status === "CHECKED_IN") {
    state.activeBooking.status = "COMPLETED";
    const spot = listings.find(s => s.id === state.activeBooking.spotId);
    if (spot && spot.quotas[state.activeBooking.vehicleType]) {
      spot.quotas[state.activeBooking.vehicleType].occupied = Math.max(0, spot.quotas[state.activeBooking.vehicleType].occupied - 1);
    }
    log.innerHTML = `<span style="color:var(--brand-dark); font-weight:600;">✔ Checked out & slot released back to pool.</span>`;
    showToast("Exit logged & slot released");
  }
  renderAll();
}

function renderAdminQueues() {
  const approvalList = document.getElementById("approvalQueueList");
  approvalList.innerHTML = pendingApprovals.length === 0
    ? `<p class="card-sub">All DL & HR submissions verified.</p>`
    : pendingApprovals.map((item, idx) => `
      <div class="queue-card">
        <div>
          <span class="state-tag ${item.state.toLowerCase()}">${item.stateName.toUpperCase()}</span>
          <strong>${item.title}</strong>
          <p class="card-sub">${item.ownerName} • ${item.panStatus} • ${item.nocStatus}</p>
        </div>
        <button class="btn-primary btn-sm" onclick="approveListing(${idx})">Approve</button>
      </div>
    `).join("");

  const bookingMonitor = document.getElementById("adminBookingsList");
  bookingMonitor.innerHTML = state.activeBooking
    ? `
      <div class="queue-card">
        <div>
          <strong>${state.activeBooking.bookingId} • ${state.activeBooking.spotTitle}</strong>
          <p class="card-sub">${state.activeBooking.stateName} • ${state.activeBooking.vehicleNumber} • ₹${state.activeBooking.amount}</p>
        </div>
        <span class="status-badge success">${state.activeBooking.status}</span>
      </div>`
    : `<p class="card-sub">No active bookings in this session yet.</p>`;
}

window.approveListing = function(idx) {
  const item = pendingApprovals.splice(idx, 1)[0];
  const isDl = item.state === "DL";
  listings.unshift({
    id: `PE-${item.state}-${Math.floor(200 + Math.random() * 700)}`,
    state: item.state,
    stateName: item.stateName,
    title: item.title,
    market: item.market,
    type: item.type,
    landmark: isDl ? "South Delhi Hub" : "Gurugram Hub",
    walkMins: 3,
    confidence: "reserved",
    confidenceLabel: "Reserved Quota",
    lastUpdated: "Just verified",
    covered: true,
    ev: false,
    heightLimit: item.height,
    gateCoords: isDl ? "28.5494° N, 77.2001° E" : "28.4712° N, 77.0850° E",
    gateInstructions: item.instructions,
    mapPos: isDl ? { top: "35%", left: "48%" } : { top: "64%", left: "54%" },
    rates: { hourly: item.hourly, daily: item.hourly * 5, monthly: item.hourly * 75 },
    quotas: {
      "2W": { total: item.slots * 2, occupied: 0 },
      "4W": { total: item.slots, occupied: 0 },
      "SUV": { total: 1, occupied: 0 },
      "EV": { total: 0, occupied: 0 }
    }
  });
  renderAll();
  showToast(`Published "${item.title}" to ${item.stateName} map`);
};

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}