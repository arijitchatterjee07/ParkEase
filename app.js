// ============================================================================
// ParkEase NCR — Regional Pilot Build (New Delhi & Haryana)
// Phase 1 Micro-Markets: South/Central Delhi (DL) & Gurugram/Faridabad (HR)
// Phase 2+ Roadmap: Expanding to UP, Maharashtra, Karnataka & Pan-India
// ============================================================================

const i18n = {
  en: {
    tagline: "Live in New Delhi & Haryana • Expanding Pan-India Soon",
    nav_driver: "Driver App",
    nav_owner: "Owner & Guard",
    nav_admin: "Trust & Ops",
    nav_blueprint: "NCR Strategy & Stack",
    hero_title: "Verified parking across New Delhi & Haryana",
    hero_sub: "Software-verified slots • Exact entry-gate pins • Zero hardware delays",
    active_pass: "QR Pass",
    book_now: "Instant Book",
    gate_guidance: "Last-100m Gate Guidance"
  },
  hi: {
    tagline: "नई दिल्ली और हरियाणा में लाइव • जल्द पूरे भारत में विस्तार",
    nav_driver: "ड्राइवर ऐप",
    nav_owner: "मालिक और गार्ड",
    nav_admin: "ट्रस्ट और ऑप्स",
    nav_blueprint: "रणनीति और स्टैक",
    hero_title: "नई दिल्ली और हरियाणा में सत्यापित पार्किंग खोजें",
    hero_sub: "सत्यापित स्लॉट • सटीक एंट्री-गेट पिन • बिना हार्डवेयर देरी",
    active_pass: "QR पास",
    book_now: "तुरंत बुक करें",
    gate_guidance: "अंतिम 100 मीटर गेट निर्देश"
  }
};

// Verified Micro-Market Supply strictly in New Delhi (DL) & Haryana (HR)
let listings = [
  {
    id: "PE-DL-101",
    state: "DL",
    stateName: "New Delhi",
    title: "Saket J-Block Builder Floor Stilt & Courtyard",
    market: "dl-south",
    type: "Builder Floor / Stilt",
    landmark: "Select Citywalk & Saket Metro Gate 2",
    walkMins: 3,
    driveMins: 2,
    confidence: "reserved",
    confidenceLabel: "Reserved Inventory (Software)",
    lastUpdated: "Synced live with booking pool",
    verified: true,
    nocVerified: true,
    covered: true,
    ev: true,
    cctv: true,
    guard: true,
    heightLimit: "2.15m (Fits SUV)",
    gateCoords: "28.5286° N, 77.2193° E",
    gateInstructions: "Enter J-Block service lane opposite Saket Metro Gate 2; green sliding gate #44. Show ParkEase QR.",
    mapPos: { top: "40%", left: "38%" },
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
    title: "Green Park Ext. Clinic Frontage (Near AIIMS)",
    state: "DL",
    stateName: "New Delhi",
    market: "dl-central",
    type: "Clinic / Shop Frontage",
    landmark: "AIIMS Gate 1 & Safdarjung Hospital",
    walkMins: 4,
    driveMins: 3,
    confidence: "estimated",
    confidenceLabel: "Estimated (Likely Available)",
    lastUpdated: "Owner updated 5 mins ago",
    verified: true,
    nocVerified: true,
    covered: false,
    ev: false,
    cctv: true,
    guard: true,
    heightLimit: "Open Sky (No Height Limit)",
    gateCoords: "28.5672° N, 77.2100° E",
    gateInstructions: "Turn left at Green Park Main Market red light; park inside yellow-marked clinic bay.",
    mapPos: { top: "30%", left: "66%" },
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
    title: "Janpath Lane Commercial Rear Lot (CP)",
    state: "DL",
    stateName: "New Delhi",
    market: "dl-central",
    type: "Small Commercial Lot",
    landmark: "Connaught Place Outer Circle / Janpath",
    walkMins: 3,
    driveMins: 2,
    confidence: "live",
    confidenceLabel: "Live (Partner Gate Counter)",
    lastUpdated: "Real-time webhook",
    verified: true,
    nocVerified: true,
    covered: false,
    ev: true,
    cctv: true,
    guard: true,
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
    title: "Shanti Niketan RWA — Visitor Basement B1 (Gurugram)",
    state: "HR",
    stateName: "Haryana",
    market: "hr-ggn",
    type: "Housing Society Spare Slot",
    landmark: "DLF Cyber Hub Tower B, Gurugram",
    walkMins: 4,
    driveMins: 3,
    confidence: "reserved",
    confidenceLabel: "Reserved Inventory (Software)",
    lastUpdated: "Synced live with booking pool",
    verified: true,
    nocVerified: true,
    covered: true,
    ev: true,
    cctv: true,
    guard: true,
    heightLimit: "2.15m (Fits SUV)",
    gateCoords: "28.4951° N, 77.0888° E",
    gateInstructions: "Take service lane behind Tower B; enter via Society Gate 2 (Blue board). Show ParkEase QR to guard.",
    mapPos: { top: "62%", left: "24%" },
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
    title: "CarePlus Diagnostic Courtyard (Sector 38, Gurugram)",
    state: "HR",
    stateName: "Haryana",
    market: "hr-ggn",
    type: "Clinic / Shop Frontage",
    landmark: "Medanta The Medicity Gate 2, Gurugram",
    walkMins: 2,
    driveMins: 2,
    confidence: "estimated",
    confidenceLabel: "Estimated (Likely Available)",
    lastUpdated: "Owner updated 6 mins ago",
    verified: true,
    nocVerified: true,
    covered: false,
    ev: false,
    cctv: true,
    guard: true,
    heightLimit: "Open Sky (No Height Limit)",
    gateCoords: "28.4394° N, 77.0412° E",
    gateInstructions: "Turn left 80m before Medanta Gate 2 traffic light. Park diagonally inside yellow markings.",
    mapPos: { top: "78%", left: "44%" },
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
    title: "Sector 15 Market Rear Plaza & Stilt (Faridabad)",
    state: "HR",
    stateName: "Haryana",
    market: "hr-fbd",
    type: "Small Commercial Lot",
    landmark: "Faridabad Sector 15 Market & Metro",
    walkMins: 3,
    driveMins: 2,
    confidence: "reserved",
    confidenceLabel: "Reserved Inventory (Software)",
    lastUpdated: "Synced live with booking pool",
    verified: true,
    nocVerified: true,
    covered: true,
    ev: false,
    cctv: true,
    guard: true,
    heightLimit: "2.10m",
    gateCoords: "28.3964° N, 77.3189° E",
    gateInstructions: "Enter from Sector 15A divider road beside Post Office; show ParkEase QR at booth.",
    mapPos: { top: "68%", left: "78%" },
    rates: { hourly: 35, daily: 150, monthly: 2500 },
    quotas: {
      "2W": { total: 15, occupied: 6 },
      "4W": { total: 8, occupied: 3 },
      "SUV": { total: 3, occupied: 1 },
      "EV": { total: 0, occupied: 0 }
    }
  }
];

// Pending Owner Submissions for NCR Admin Trust Queue
let pendingApprovals = [
  {
    id: "KYC-DL-304",
    state: "DL",
    stateName: "New Delhi",
    ownerName: "Vikramaditya Kapoor",
    title: "C-14 Hauz Khas Enclave Ground Stilt, New Delhi",
    market: "dl-south",
    type: "Builder Floor / Stilt",
    panStatus: "PAN & Penny-Drop Verified",
    nocStatus: "Hauz Khas RWA NOC Uploaded",
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
    title: "A-19 Rosewood City Stilt Parking, Gurugram",
    market: "hr-ggn",
    type: "Housing Society Spare Slot",
    panStatus: "PAN & Penny-Drop Verified",
    nocStatus: "Gurugram RWA NOC Uploaded",
    hourly: 40,
    slots: 2,
    height: "2.1m",
    instructions: "Enter via Rosewood Gate 3; second house on right."
  }
];

// App State
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

// ============================================================================
// Initialization & Event Listeners
// ============================================================================
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
    applyTranslations();
    renderListings();
    renderMapPreview();
    showToast(state.lang === "hi" ? "भाषा हिंदी में बदली गई" : "Language switched to English");
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
      showToast("No active pass yet. Book a parking spot in Delhi or Haryana first!");
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
  document.querySelectorAll(".chip[data-market]").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip[data-market]").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.selectedMarket = chip.dataset.market;
      renderListings();
    });
  });

  document.getElementById("stateFilter").addEventListener("change", (e) => {
    state.selectedState = e.target.value;
    renderListings();
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
    showToast(state.ownerLotFull ? "Lot marked FULL across NCR driver map" : "Lot reopened for bookings");
  });

  document.getElementById("openOnboardModalBtn").addEventListener("click", () => {
    document.getElementById("onboardModal").classList.remove("hidden");
  });

  document.getElementById("onboardForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const st = document.getElementById("newState").value;
    const stName = st === "DL" ? "New Delhi" : "Haryana";
    const newItem = {
      id: `KYC-${st}-${Math.floor(300 + Math.random() * 600)}`,
      state: st,
      stateName: stName,
      ownerName: "Arijit Chatterjee (Demo Owner)",
      title: document.getElementById("newTitle").value,
      market: document.getElementById("newMarket").value,
      type: document.getElementById("newType").value,
      panStatus: "PAN & Bank Penny-Drop Verified",
      nocStatus: `${stName} RWA NOC Attached`,
      hourly: Number(document.getElementById("newHourlyRate").value),
      slots: Number(document.getElementById("newSlots").value),
      height: document.getElementById("newHeight").value,
      instructions: document.getElementById("newInstructions").value
    };
    pendingApprovals.unshift(newItem);
    document.getElementById("onboardModal").classList.add("hidden");
    e.target.reset();
    renderAdminQueues();
    showToast(`Submitted ${stName} space to NCR Trust & Ops Queue!`);
  });

  document.getElementById("fillActiveCodeBtn").addEventListener("click", () => {
    if (!state.activeBooking) {
      showToast("Book a spot in Driver App first to generate a live code.");
      return;
    }
    document.getElementById("manualCodeInput").value = state.activeBooking.fallbackCode;
  });

  document.getElementById("verifyCheckInBtn").addEventListener("click", handleGuardScan);
}

// ============================================================================
// Rendering Functions
// ============================================================================
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
  if (!q) return 0;
  return Math.max(0, q.total - q.occupied);
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
    const avail = getAvailableSlots(spot, state.vehicleType);
    if (state.filterAvailable && avail <= 0) return false;
    if (state.searchQuery) {
      const hay = `${spot.title} ${spot.landmark} ${spot.stateName} ${spot.gateInstructions}`.toLowerCase();
      if (!hay.includes(state.searchQuery)) return false;
    }
    return true;
  });

  const regionText = state.selectedState === "DL"
    ? "New Delhi (DL)"
    : state.selectedState === "HR"
      ? "Haryana (HR)"
      : "New Delhi & Haryana";

  document.getElementById("resultsCount").textContent =
    `Showing ${filtered.length} verified spot${filtered.length === 1 ? "" : "s"} in ${regionText} for ${state.vehicleType}`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card">
        <h3>No matching slots in ${regionText} for ${state.vehicleType}</h3>
        <p class="muted-text">Try switching state filter (DL / HR), vehicle type, or unchecking filters.</p>
      </div>`;
    return;
  }

  filtered.forEach(spot => {
    const avail = getAvailableSlots(spot, state.vehicleType);
    const rate = spot.rates[state.duration];
    const unitLabel = state.duration === "hourly" ? "/hr" : state.duration === "daily" ? "/day" : "/mo";
    const isSelected = spot.id === state.selectedSpotId;

    // Render Map Pin
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

    // Render Card
    const card = document.createElement("article");
    card.className = `spot-card ${isSelected ? "selected" : ""}`;
    card.innerHTML = `
      <div class="spot-top">
        <div>
          <div class="spot-title-row">
            <span class="state-pill state-${spot.state.toLowerCase()}">${spot.stateName.toUpperCase()} (${spot.state})</span>
            <span class="spot-title">${spot.title}</span>
            <span class="verified-badge">✔ KYC + NOC</span>
          </div>
          <div class="spot-sub">
            🚶 ${spot.walkMins} min walk to <strong>${spot.landmark}</strong> • 🚗 ${spot.driveMins} min drive • ${spot.type}
          </div>
        </div>
        <span class="confidence-pill conf-${spot.confidence}">${spot.confidenceLabel}</span>
      </div>

      <div class="spot-tags">
        <span class="tag">${spot.covered ? "🏠 Covered" : "☀️ Open"}</span>
        <span class="tag">📏 ${spot.heightLimit}</span>
        ${spot.cctv ? '<span class="tag">📹 CCTV</span>' : ""}
        ${spot.guard ? '<span class="tag">💂 Guard QR</span>' : ""}
        ${spot.ev ? '<span class="tag">⚡ EV Point</span>' : ""}
      </div>

      <div class="gate-callout">
        <strong>🚪 ${i18n[state.lang].gate_guidance}:</strong> ${spot.gateInstructions}
      </div>

      <div class="spot-bottom">
        <div class="price-block">
          <strong>₹${rate}</strong><span>${unitLabel}</span>
        </div>
        <div>
          <span class="slot-status ${avail > 2 ? "ok" : avail > 0 ? "low" : "full"}">
            ${avail > 0 ? `${avail} ${state.vehicleType} slots free` : "Full"}
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
  const preview = document.getElementById("selectedSpotPreview");
  const avail = getAvailableSlots(spot, state.vehicleType);

  preview.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
      <strong>${spot.title}</strong>
      <span class="state-pill state-${spot.state.toLowerCase()}">${spot.stateName}</span>
    </div>
    <p class="spot-sub" style="margin-top:4px;">Gate GPS: ${spot.gateCoords} • ${spot.lastUpdated}</p>
    <div class="gate-banner">
      <strong>📍 Entry Gate Pin (Separate from Building):</strong><br/>
      ${spot.gateInstructions}
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
      <span class="slot-status ${avail > 0 ? "ok" : "full"}">
        ${avail} ${state.vehicleType} slots available
      </span>
      <button class="btn-primary btn-sm" onclick="openBookingModal('${spot.id}')" ${avail === 0 ? "disabled" : ""}>
        Reserve with UPI Intent
      </button>
    </div>
  `;
}

// ============================================================================
// Booking Flow & Signed Offline QR Pass
// ============================================================================
window.openBookingModal = function(spotId) {
  const spot = listings.find(s => s.id === spotId);
  if (!spot) return;

  const basePrice = spot.rates[state.duration];
  const platformFee = Math.round(basePrice * 0.08);
  const gst = Math.round(platformFee * 0.18);
  const total = basePrice + platformFee + gst;

  document.getElementById("modalSpotTitle").textContent = `Confirm ${state.vehicleType} Pass — ${spot.stateName}`;
  document.getElementById("bookingModalBody").innerHTML = `
    <div class="gate-callout">
      <strong>Location:</strong> ${spot.title} (${spot.stateName})<br/>
      <strong>Gate Pin:</strong> ${spot.gateCoords}<br/>
      <strong>Vehicle:</strong> ${state.vehicleType} (${state.vehicleNumber}) • <strong>Clearance:</strong> ${spot.heightLimit}
    </div>

    <div class="price-summary">
      <div class="price-row"><span>Parking Tariff (${state.duration})</span><span>₹${basePrice}</span></div>
      <div class="price-row"><span>Platform Convenience Fee</span><span>₹${platformFee}</span></div>
      <div class="price-row"><span>GST (18% on fee)</span><span>₹${gst}</span></div>
      <div class="price-row total"><span>Total Payable via UPI</span><span>₹${total}</span></div>
    </div>

    <p class="muted-text">
      • Free cancellation up to 60 mins before start • 15-min no-show grace period • Split-settled directly via Razorpay Route.
    </p>

    <div class="modal-footer">
      <button class="btn-outline" data-close="bookingModal">Cancel</button>
      <button class="btn-primary" id="confirmUpiPayBtn">Pay ₹${total} via UPI Intent</button>
    </div>
  `;

  document.querySelectorAll("#bookingModal [data-close]").forEach(btn => {
    btn.addEventListener("click", () => document.getElementById("bookingModal").classList.add("hidden"));
  });

  document.getElementById("confirmUpiPayBtn").addEventListener("click", () => {
    confirmBooking(spot, total);
  });

  document.getElementById("bookingModal").classList.remove("hidden");
};

function confirmBooking(spot, totalAmount) {
  const quota = spot.quotas[state.vehicleType];
  if (quota && quota.occupied < quota.total) {
    quota.occupied += 1;
  }

  const code = `PE-${spot.state}-${Math.floor(1000 + Math.random() * 9000)}`;
  state.activeBooking = {
    bookingId: `BK-${spot.state}-${Date.now().toString().slice(-5)}`,
    spotId: spot.id,
    stateName: spot.stateName,
    spotTitle: spot.title,
    gateCoords: spot.gateCoords,
    gateInstructions: spot.gateInstructions,
    vehicleType: state.vehicleType,
    vehicleNumber: state.vehicleNumber,
    duration: state.duration,
    amount: totalAmount,
    fallbackCode: code,
    status: "CONFIRMED",
    signature: btoa(`${code}|${spot.id}|${state.vehicleNumber}`).slice(0, 18)
  };

  state.ledger.gross += totalAmount;

  document.getElementById("bookingModal").classList.add("hidden");
  document.getElementById("passBadge").classList.remove("hidden");
  renderAll();
  openQrPassModal();
  showToast(`ParkEase ${spot.stateName} pass confirmed! Offline QR generated.`);
}

function openQrPassModal() {
  const b = state.activeBooking;
  if (!b) return;

  document.getElementById("qrPassBody").innerHTML = `
    <div class="qr-ticket">
      <span class="badge-soft success">${b.status} • PARKEASE NCR (${b.stateName.toUpperCase()})</span>
      <h4 style="margin-top:8px;">${b.spotTitle}</h4>
      <p class="spot-sub">${b.vehicleType} • <strong>${b.vehicleNumber}</strong></p>

      <div class="qr-svg-wrap">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#fff"/>
          <rect x="8" y="8" width="26" height="26" fill="none" stroke="#0f172a" stroke-width="5"/>
          <rect x="15" y="15" width="12" height="12" fill="#0f766e"/>
          <rect x="66" y="8" width="26" height="26" fill="none" stroke="#0f172a" stroke-width="5"/>
          <rect x="73" y="15" width="12" height="12" fill="#0f766e"/>
          <rect x="8" y="66" width="26" height="26" fill="none" stroke="#0f172a" stroke-width="5"/>
          <rect x="15" y="73" width="12" height="12" fill="#0f766e"/>
          <path d="M44 12h12v12H44zm0 24h24v12H44zm-28 12h16v12H16zm48 16h24v24H64zm-20 8h12v16H44z" fill="#0f172a"/>
        </svg>
      </div>

      <div class="fallback-code">${b.fallbackCode}</div>
      <p class="spot-sub">Basement Offline Code (Guard can type if zero signal)</p>
      <p style="font-family:'JetBrains Mono',monospace; font-size:0.7rem; color:#64748b; margin-top:4px;">
        SIG: ${b.signature}
      </p>
    </div>

    <div class="gate-banner">
      <strong>🚪 Entry Instructions:</strong> ${b.gateInstructions}
    </div>

    <div class="modal-footer">
      <a class="btn-outline" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.spotTitle + ' ' + b.stateName)}" target="_blank" rel="noopener">
        Open Gate Pin in Google Maps ↗
      </a>
      <button class="btn-primary" data-close="qrPassModal">Done</button>
    </div>
  `;

  document.querySelectorAll("#qrPassModal [data-close]").forEach(btn => {
    btn.addEventListener("click", () => document.getElementById("qrPassModal").classList.add("hidden"));
  });

  document.getElementById("qrPassModal").classList.remove("hidden");
}

// ============================================================================
// Owner Console & Guard QR Check-In
// ============================================================================
function renderOwnerConsole() {
  const spot = listings.find(s => s.id === "PE-HR-201") || listings[0];
  const container = document.getElementById("ownerInventoryControls");
  container.innerHTML = "";

  Object.entries(spot.quotas).forEach(([vType, data]) => {
    const row = document.createElement("div");
    row.className = "inv-row";
    row.innerHTML = `
      <div>
        <strong>${vType} Reserved Pool</strong>
        <div class="spot-sub">Occupied: ${data.occupied} / ${data.total} slots</div>
      </div>
      <div class="counter-btns">
        <button class="counter-btn" onclick="adjustSlot('${vType}', -1)" title="Vehicle Out">-1</button>
        <strong>${data.total - data.occupied} Free</strong>
        <button class="counter-btn" onclick="adjustSlot('${vType}', 1)" title="Vehicle In">+1</button>
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
  showToast(`Updated ${vType} counter (${q.total - q.occupied} free)`);
};

function handleGuardScan() {
  const input = document.getElementById("manualCodeInput").value.trim().toUpperCase();
  const log = document.getElementById("scanResultLog");

  if (!state.activeBooking || input !== state.activeBooking.fallbackCode) {
    log.innerHTML = `<span style="color:var(--danger); font-weight:700;">✖ Invalid or expired token. Check fallback code.</span>`;
    return;
  }

  if (state.activeBooking.status === "CONFIRMED") {
    state.activeBooking.status = "CHECKED_IN";
    log.innerHTML = `<span style="color:var(--live); font-weight:700;">✔ ENTRY LOGGED (${new Date().toLocaleTimeString()}) — ${state.activeBooking.vehicleNumber} verified offline.</span>`;
    showToast("Driver Checked In! Entry timestamp synced.");
  } else if (state.activeBooking.status === "CHECKED_IN") {
    state.activeBooking.status = "COMPLETED";
    const spot = listings.find(s => s.id === state.activeBooking.spotId);
    if (spot && spot.quotas[state.activeBooking.vehicleType]) {
      spot.quotas[state.activeBooking.vehicleType].occupied = Math.max(0, spot.quotas[state.activeBooking.vehicleType].occupied - 1);
    }
    log.innerHTML = `<span style="color:var(--accent); font-weight:700;">✔ EXIT LOGGED — Slot released back to pool & settlement queued.</span>`;
    showToast("Driver Checked Out! Slot auto-released.");
  } else {
    log.innerHTML = `<span class="muted-text">Pass already completed.</span>`;
  }

  renderAll();
}

// ============================================================================
// Admin & Trust Ops Queue
// ============================================================================
function renderAdminQueues() {
  const approvalList = document.getElementById("approvalQueueList");
  approvalList.innerHTML = "";

  if (pendingApprovals.length === 0) {
    approvalList.innerHTML = `<p class="muted-text">All New Delhi & Haryana KYC/NOC submissions reviewed.</p>`;
  } else {
    pendingApprovals.forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = "queue-item";
      div.innerHTML = `
        <div>
          <span class="state-pill state-${item.state.toLowerCase()}">${item.stateName.toUpperCase()}</span>
          <strong>${item.title}</strong> <span class="badge-soft">${item.id}</span>
          <div class="spot-sub">Owner: ${item.ownerName} • ${item.panStatus} • <strong>${item.nocStatus}</strong></div>
          <div class="spot-sub">Gate Note: "${item.instructions}"</div>
        </div>
        <div>
          <button class="btn-primary btn-sm" onclick="approveListing(${idx})">Approve & Publish</button>
        </div>
      `;
      approvalList.appendChild(div);
    });
  }

  const bookingMonitor = document.getElementById("adminBookingsList");
  bookingMonitor.innerHTML = state.activeBooking
    ? `
      <div class="queue-item">
        <div>
          <strong>${state.activeBooking.bookingId} — ${state.activeBooking.spotTitle}</strong>
          <div class="spot-sub">Region: ${state.activeBooking.stateName} • Vehicle: ${state.activeBooking.vehicleNumber} (${state.activeBooking.vehicleType}) • Paid: ₹${state.activeBooking.amount}</div>
        </div>
        <span class="badge-soft success">${state.activeBooking.status}</span>
      </div>`
    : `<p class="muted-text">No live bookings in current session. Book a spot in New Delhi or Haryana to monitor.</p>`;
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
    landmark: isDl ? "South Delhi Micro-Market Hub" : "Gurugram Micro-Market Hub",
    walkMins: 3,
    driveMins: 2,
    confidence: "reserved",
    confidenceLabel: "Reserved Inventory (Software)",
    lastUpdated: "Just verified by NCR Ops",
    verified: true,
    nocVerified: true,
    covered: true,
    ev: false,
    cctv: true,
    guard: true,
    heightLimit: item.height,
    gateCoords: isDl ? "28.5494° N, 77.2001° E" : "28.4712° N, 77.0850° E",
    gateInstructions: item.instructions,
    mapPos: isDl ? { top: "36%", left: "48%" } : { top: "64%", left: "54%" },
    rates: { hourly: item.hourly, daily: item.hourly * 5, monthly: item.hourly * 75 },
    quotas: {
      "2W": { total: item.slots * 2, occupied: 0 },
      "4W": { total: item.slots, occupied: 0 },
      "SUV": { total: 1, occupied: 0 },
      "EV": { total: 0, occupied: 0 }
    }
  });
  renderAll();
  showToast(`Approved "${item.title}"! Now live on ParkEase ${item.stateName} Map.`);
};

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add("hidden"), 3200);
}