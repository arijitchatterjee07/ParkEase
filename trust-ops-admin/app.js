// ============================================================================
// ParkEase Trust & Ops — KYC Verification & Live NCR Command Center
// ============================================================================

let state = {
  theme: "light",
  selectedState: "all",
  verifiedTotal: 250,
  pendingApprovals: [
    {
      id: "KYC-DL-304",
      state: "DL",
      stateName: "New Delhi",
      ownerName: "Vikramaditya Kapoor",
      title: "C-14 Hauz Khas Enclave Ground Stilt",
      type: "Builder Floor Stilt",
      panStatus: "PAN Verified",
      nocStatus: "Hauz Khas RWA NOC",
      hourly: 55,
      slots: 2
    },
    {
      id: "KYC-HR-309",
      state: "HR",
      stateName: "Haryana",
      ownerName: "Rajeshwar Malhotra",
      title: "A-19 Rosewood City Stilt, Gurugram",
      type: "Society Spare Slot",
      panStatus: "PAN Verified",
      nocStatus: "Gurugram RWA NOC",
      hourly: 40,
      slots: 2
    },
    {
      id: "KYC-DL-312",
      state: "DL",
      stateName: "New Delhi",
      ownerName: "Meenakshi Verma",
      title: "B-92 Defence Colony Rear Courtyard",
      type: "Commercial Frontage",
      panStatus: "PAN Verified",
      nocStatus: "MCD Trade NOC",
      hourly: 65,
      slots: 3
    }
  ],
  liveBookings: [
    {
      bookingId: "BK-DL-88412",
      state: "DL",
      stateName: "New Delhi",
      spotTitle: "Saket J-Block Builder Floor Stilt",
      vehicle: "DL8C AX 7741 (SUV)",
      amount: 132,
      status: "CHECKED_IN"
    },
    {
      bookingId: "BK-HR-90214",
      state: "HR",
      stateName: "Haryana",
      spotTitle: "Shanti Niketan RWA Basement B1",
      vehicle: "HR26 EQ 9012 (4W)",
      amount: 55,
      status: "CONFIRMED"
    },
    {
      bookingId: "BK-HR-90255",
      state: "HR",
      stateName: "Haryana",
      spotTitle: "Sector 15 Market Rear Stilt Plaza",
      vehicle: "HR51 EV 1104 (EV)",
      amount: 76,
      status: "CHECKED_IN"
    },
    {
      bookingId: "BK-DL-88490",
      state: "DL",
      stateName: "New Delhi",
      spotTitle: "Janpath Lane Rear Commercial Lot",
      vehicle: "DL3S DK 4821 (2W)",
      amount: 40,
      status: "GRACE_15M"
    }
  ],
  approvedSpaces: [
    {
      id: "PE-DL-101",
      state: "DL",
      stateName: "New Delhi",
      title: "Saket J-Block Builder Floor Stilt",
      ownerName: "Harpreet Singh",
      hourly: 60,
      slots: 17
    },
    {
      id: "PE-HR-201",
      state: "HR",
      stateName: "Haryana",
      title: "Shanti Niketan RWA Basement B1",
      ownerName: "Ananya Sharma",
      hourly: 50,
      slots: 21
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  bindFilters();
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

function bindFilters() {
  document.querySelectorAll(".seg-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".seg-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedState = btn.dataset.state;
      renderAll();
    });
  });
}

function renderAll() {
  const filterByState = (item) => state.selectedState === "all" || item.state === state.selectedState;

  const pending = state.pendingApprovals.filter(filterByState);
  const bookings = state.liveBookings.filter(filterByState);
  const approved = state.approvedSpaces.filter(filterByState);

  document.getElementById("verifiedCountKpi").textContent = `${state.verifiedTotal} Spots`;
  document.getElementById("pendingCountKpi").textContent = `${pending.length} Application${pending.length === 1 ? "" : "s"}`;
  document.getElementById("activeSessionsKpi").textContent = `${bookings.length} Live`;

  // Render Pending KYC Queue
  const approvalList = document.getElementById("approvalQueueList");
  approvalList.innerHTML = pending.length === 0
    ? `<p class="card-sub">All DL & HR submissions verified for this filter.</p>`
    : pending.map(item => `
      <div class="queue-card">
        <div>
          <span class="state-tag ${item.state.toLowerCase()}">${item.stateName.toUpperCase()}</span>
          <strong>${item.title}</strong>
          <p class="card-sub">${item.ownerName} • ${item.panStatus} • ${item.nocStatus} • ₹${item.hourly}/hr</p>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn-danger-outline" onclick="rejectListing('${item.id}')">Reject</button>
          <button class="btn-primary btn-sm" onclick="approveListing('${item.id}')">Approve & Publish</button>
        </div>
      </div>
    `).join("");

  // Render Live Bookings Monitor
  const bookingMonitor = document.getElementById("adminBookingsList");
  bookingMonitor.innerHTML = bookings.length === 0
    ? `<p class="card-sub">No active sessions in this state.</p>`
    : bookings.map(b => `
      <div class="queue-card">
        <div>
          <span class="state-tag ${b.state.toLowerCase()}">${b.stateName.toUpperCase()}</span>
          <strong>${b.bookingId} • ${b.spotTitle}</strong>
          <p class="card-sub">${b.vehicle} • Paid ₹${b.amount}</p>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="status-badge ${b.status === "GRACE_15M" ? "warning" : "success"}">${b.status}</span>
          ${b.status === "GRACE_15M" ? `<button class="btn-ghost" onclick="forceRelease('${b.bookingId}')">Release Slot</button>` : ""}
        </div>
      </div>
    `).join("");

  // Render Approved Registry
  document.getElementById("approvedRegistryList").innerHTML = approved.map(sp => `
    <div class="queue-card">
      <div>
        <span class="state-tag ${sp.state.toLowerCase()}">${sp.stateName.toUpperCase()}</span>
        <strong>${sp.title}</strong>
        <p class="card-sub">Owner: ${sp.ownerName} • ₹${sp.hourly}/hr • ${sp.slots} verified slots</p>
      </div>
      <span class="status-badge success">PUBLISHED</span>
    </div>
  `).join("");
}

window.approveListing = function(id) {
  const idx = state.pendingApprovals.findIndex(x => x.id === id);
  if (idx === -1) return;
  const item = state.pendingApprovals.splice(idx, 1)[0];
  state.verifiedTotal += 1;
  state.approvedSpaces.unshift({
    id: item.id,
    state: item.state,
    stateName: item.stateName,
    title: item.title,
    ownerName: item.ownerName,
    hourly: item.hourly,
    slots: item.slots
  });
  renderAll();
  showToast(`Approved & published "${item.title}" to ${item.stateName}`);
};

window.rejectListing = function(id) {
  const idx = state.pendingApprovals.findIndex(x => x.id === id);
  if (idx === -1) return;
  const item = state.pendingApprovals.splice(idx, 1)[0];
  renderAll();
  showToast(`Rejected "${item.title}" — NOC re-upload requested`);
};

window.forceRelease = function(bookingId) {
  state.liveBookings = state.liveBookings.filter(b => b.bookingId !== bookingId);
  renderAll();
  showToast(`No-show grace expired for ${bookingId} — slot released back to NCR pool`);
};

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}
