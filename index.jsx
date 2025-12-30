@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: same “hide scrollbar” behavior in case you want it globally */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
