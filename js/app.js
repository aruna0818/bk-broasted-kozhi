// Menu Data for Bk Broasted Kozhi
const menuItems = [
  {
    id: 1,
    name: "Classic Broasted Kozhi (2 Pcs)",
    tamilName: "கிளாசிக் ப்ரோஸ்டட் கோழி (2 பீஸ்)",
    category: "broasted",
    price: 189,
    originalPrice: 220,
    rating: 4.9,
    badge: "Bestseller",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
    description: "2 pieces of golden crispy, juicy pressure-fried chicken served with garlic dip & bun."
  },
  {
    id: 2,
    name: "Mega Broasted Bucket (4 Pcs)",
    tamilName: "மெகா ப்ரோஸ்டட் பக்கெட் (4 பீஸ்)",
    category: "broasted",
    price: 369,
    originalPrice: 420,
    rating: 5.0,
    badge: "Popular",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    description: "4 succulent crispy broasted chicken pieces + 2 Garlic dips + 2 Fresh Buns."
  },
  {
    id: 3,
    name: "Family Kozhi Feast Bucket (8 Pcs)",
    tamilName: "ஃபேமிலி கோழி ஃபீஸ்ட் (8 பீஸ்)",
    category: "broasted",
    price: 699,
    originalPrice: 799,
    rating: 4.9,
    badge: "Grand Value",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80",
    description: "8 pieces of crunchy broasted chicken + 4 Dips + Large French Fries + 4 Buns."
  },
  {
    id: 4,
    name: "Bk Monster Zinger Burger",
    tamilName: "Bk மான்ஸ்டர் ஜிங்கர் பர்கர்",
    category: "burgers",
    price: 179,
    originalPrice: 210,
    rating: 4.8,
    badge: "Chef Special",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    description: "Huge whole chicken breast fillet deep fried with spicy crunch, cheese, fresh lettuce & peri mayo."
  },
  {
    id: 5,
    name: "Double Crunch Cheese Burger",
    tamilName: "டபுள் க்ரஞ்ச் சீஸ் பர்கர்",
    category: "burgers",
    price: 239,
    originalPrice: 279,
    rating: 4.9,
    badge: "Must Try",
    badgeColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    description: "Twin crispy fried patties layered with double molten cheddar cheese slice & smoky sauce."
  },
  {
    id: 6,
    name: "Crispy Kozhi Tortilla Wrap",
    tamilName: "க்ரிஸ்பி கோழி டார்ட்டில்லா வ்ராப்",
    category: "burgers",
    price: 159,
    originalPrice: 189,
    rating: 4.7,
    badge: "New",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    description: "Tender boneless crispy chicken tenders wrapped with onion, spicy chipotle and herbs."
  },
  {
    id: 7,
    name: "Spicy Peri Peri Wings (6 Pcs)",
    tamilName: "ஸ்பைசி பெரி பெரி விங்ஸ் (6 பீஸ்)",
    category: "bites",
    price: 189,
    originalPrice: 220,
    rating: 4.9,
    badge: "Spicy 🔥",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
    description: "Crispy fried juicy chicken wings tossed with hot African Bird's Eye Peri Peri seasoning."
  },
  {
    id: 8,
    name: "Boneless Kozhi Popcorn (Medium)",
    tamilName: "போன்லெஸ் சிக்கன் பாப்கார்ன்",
    category: "bites",
    price: 149,
    originalPrice: 170,
    rating: 4.8,
    badge: "Kids Favorite",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
    description: "Bite-sized tender crispy chicken chunks seasoned with secret spices and dip."
  },
  {
    id: 9,
    name: "Loaded Cheesy Kozhi Fries",
    tamilName: "லோடட் சீஸி கோழி பிரைஸ்",
    category: "bites",
    price: 169,
    originalPrice: 199,
    rating: 4.9,
    badge: "Top Rated",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
    description: "Crispy French fries topped with minced crispy chicken chunks, jalapenos and warm cheese sauce."
  },
  {
    id: 10,
    name: "Solo Craver Combo",
    tamilName: "சோலோ கிரேவர் காம்போ",
    category: "combos",
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    badge: "Save 17%",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80",
    description: "1pc Broasted Chicken + 1 Burger + French Fries + Chilled Mojito / Soft Drink."
  },
  {
    id: 11,
    name: "Tondiarpet Special Kozhi Box",
    tamilName: "தண்டையார்பேட்டை ஸ்பெஷல் பாக்ஸ்",
    category: "combos",
    price: 499,
    originalPrice: 580,
    rating: 5.0,
    badge: "Opening Hero",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=600&q=80",
    description: "2pcs Broasted Kozhi + 1 Monster Burger + 4pcs Hot Wings + Fries + 2 Cold Drinks."
  },
  {
    id: 12,
    name: "Blue Curacao Sparkler Mojito",
    tamilName: "ப்ளூ குராக்கோ மொஜித்தோ",
    category: "beverages",
    price: 89,
    originalPrice: 110,
    rating: 4.7,
    badge: "Refreshing",
    badgeColor: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    description: "Chilled sparkling blue mocktail with fresh mint leaves and lime wedges."
  },
  {
    id: 13,
    name: "Spicy Green Apple Cooler",
    tamilName: "கிரீன் ஆப்பிள் கூலர்",
    category: "beverages",
    price: 89,
    originalPrice: 110,
    rating: 4.6,
    badge: "Cooler",
    badgeColor: "bg-teal-600",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80",
    description: "Crisp green apple flavored fizzy cooler to balance spicy chicken bites."
  }
];

// Shopping Cart State
let cart = JSON.parse(localStorage.getItem('bk_cart')) || [];

// Target Opening Date: October 4, 2026 10:00:00 AM IST
const openingDate = new Date('2026-10-04T10:00:00+05:30').getTime();

// Init when DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  renderMenuItems('all');
  updateCartBadge();
  startCountdown();
  setupEventListeners();
});

// Setup Category Filter & Event Listeners
function setupEventListeners() {
  const filterButtons = document.querySelectorAll('.category-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-red-600', 'text-white', 'shadow-lg');
        b.classList.add('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
      });
      btn.classList.add('bg-red-600', 'text-white', 'shadow-lg');
      btn.classList.remove('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
      
      const category = btn.getAttribute('data-category');
      renderMenuItems(category);
    });
  });
}

// Render Menu Cards
function renderMenuItems(category = 'all') {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const filtered = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-950/40 transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
      <div class="relative overflow-hidden h-48 sm:h-52 bg-slate-900">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          loading="lazy"
          class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30"></div>
        <span class="absolute top-3 left-3 ${item.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
          ${item.badge}
        </span>
        <div class="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-amber-400 text-xs font-semibold px-2 py-1 rounded-lg flex items-center gap-1">
          <i class="fa-solid fa-star text-[10px]"></i> ${item.rating}
        </div>
      </div>
      
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="text-xs text-amber-400 font-tamil font-semibold mb-1">${item.tamilName}</div>
          <h3 class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">${item.name}</h3>
          <p class="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">${item.description}</p>
        </div>

        <div class="pt-4 mt-3 border-t border-slate-700/60 flex items-center justify-between">
          <div>
            <div class="flex items-baseline gap-1.5">
              <span class="text-xl font-extrabold text-white">₹${item.price}</span>
              ${item.originalPrice ? `<span class="text-xs text-slate-400 line-through">₹${item.originalPrice}</span>` : ''}
            </div>
            <span class="text-[10px] text-emerald-400 font-medium">100% Fresh Kozhi</span>
          </div>

          <button 
            onclick="addToCart(${item.id})"
            class="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-95 group-hover:bg-red-500"
          >
            <i class="fa-solid fa-plus text-xs"></i> Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Add Item to Cart
function addToCart(id) {
  const item = menuItems.find(p => p.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`🍗 "${item.name}" added to cart!`);
}

// Remove / Update Qty
function updateQty(id, delta) {
  const index = cart.findIndex(c => c.id === id);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartBadge();
  renderCartModal();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartBadge();
  renderCartModal();
}

function saveCart() {
  localStorage.setItem('bk_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  });
}

// Toast Notifications
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-amber-400"></i> <span>${msg}</span>`;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2500);
}

// Drawer Cart Controls
function toggleCartDrawer(show = true) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  const content = document.getElementById('cartDrawerContent');

  if (show) {
    renderCartModal();
    drawer.classList.remove('hidden');
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      content.classList.remove('translate-x-full');
    }, 10);
  } else {
    backdrop.classList.add('opacity-0');
    content.classList.add('translate-x-full');
    setTimeout(() => {
      drawer.classList.add('hidden');
    }, 300);
  }
}

// Render Cart Inside Drawer
function renderCartModal() {
  const cartItemsContainer = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartTotalEl = document.getElementById('cartTotal');
  const emptyState = document.getElementById('cartEmptyState');
  const cartFilledState = document.getElementById('cartFilledState');

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    emptyState.classList.remove('hidden');
    cartFilledState.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  cartFilledState.classList.remove('hidden');

  let subtotal = 0;

  cartItemsContainer.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="flex items-center justify-between p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover" />
        <div class="flex-1 ml-3">
          <h4 class="text-sm font-semibold text-white line-clamp-1">${item.name}</h4>
          <span class="text-xs text-amber-400 font-medium">₹${item.price} each</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
            <button onclick="updateQty(${item.id}, -1)" class="w-7 h-7 text-slate-300 hover:bg-slate-800 flex items-center justify-center font-bold text-xs">-</button>
            <span class="w-6 text-center text-xs font-bold text-white">${item.qty}</span>
            <button onclick="updateQty(${item.id}, 1)" class="w-7 h-7 text-slate-300 hover:bg-slate-800 flex items-center justify-center font-bold text-xs">+</button>
          </div>
          <span class="text-sm font-bold text-white min-w-[50px] text-right">₹${itemTotal}</span>
          <button onclick="removeFromCart(${item.id})" class="text-slate-400 hover:text-red-400 ml-1 text-xs">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  cartSubtotalEl.textContent = `₹${subtotal}`;
  cartTotalEl.textContent = `₹${subtotal}`;
}

// Generate WhatsApp Order Message
function sendWhatsAppOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty! Please add some tasty broasted kozhi first.");
    return;
  }

  const name = document.getElementById('orderCustName').value.trim();
  const phone = document.getElementById('orderCustPhone').value.trim();
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'Takeaway';
  const address = document.getElementById('orderCustAddress').value.trim();
  const notes = document.getElementById('orderCustNotes').value.trim();

  if (!name || !phone) {
    alert("Please enter your Name and Phone Number.");
    return;
  }

  let subtotal = 0;
  let itemsListText = "";

  cart.forEach((item, index) => {
    const cost = item.price * item.qty;
    subtotal += cost;
    itemsListText += `${index + 1}. *${item.name}* (x${item.qty}) - ₹${cost}%0A`;
  });

  let message = `🍗 *NEW ORDER - Bk BROASTED KOZHI (Tondiarpet)* 🍗%0A`;
  message += `━━━━━━━━━━━━━━━━━━━━%0A`;
  message += `👤 *Customer:* ${encodeURIComponent(name)}%0A`;
  message += `📞 *Phone:* ${encodeURIComponent(phone)}%0A`;
  message += `🛵 *Order Type:* ${encodeURIComponent(orderType)}%0A`;
  if (address) {
    message += `📍 *Delivery Address / Landmark:* ${encodeURIComponent(address)}%0A`;
  }
  if (notes) {
    message += `📝 *Notes:* ${encodeURIComponent(notes)}%0A`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━%0A`;
  message += `📦 *ITEMS ORDERED:*%0A${itemsListText}`;
  message += `━━━━━━━━━━━━━━━━━━━━%0A`;
  message += `💰 *TOTAL AMOUNT:* *₹${subtotal}*%0A`;
  message += `━━━━━━━━━━━━━━━━━━━━%0A`;
  message += `📍 *Shop Address:* Old No 29/1 New No 71 Thandavaraya Gramani St, Tondiarpet Market (Opp. Ragam Bakery)%0A`;
  message += `✨ _Sent via Bk Broasted Kozhi Website_`;

  const phoneShop = "918015638952";
  const waUrl = `https://wa.me/${phoneShop}?text=${message}`;

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');
}

// Countdown Timer Logic
function startCountdown() {
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMins');
  const secsEl = document.getElementById('cdSecs');

  function update() {
    const now = new Date().getTime();
    const distance = openingDate - now;

    if (distance < 0) {
      if (document.getElementById('countdownSection')) {
        document.getElementById('countdownSection').innerHTML = `
          <div class="text-center py-6">
            <span class="inline-block bg-emerald-500 text-white font-bold px-6 py-2 rounded-full text-lg animate-bounce">
              🎉 WE ARE NOW OPEN! VISIT US IN TONDIARPET! 🎉
            </span>
          </div>
        `;
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Poster Lightbox Modal
function openPosterModal() {
  const modal = document.getElementById('posterModal');
  if (modal) modal.classList.remove('hidden');
}

function closePosterModal() {
  const modal = document.getElementById('posterModal');
  if (modal) modal.classList.add('hidden');
}
