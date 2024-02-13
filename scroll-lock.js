document.addEventListener("DOMContentLoaded", function () {
    const targetSection = document.getElementById("info-container-3");
    let isScrollLocked = false;
  
    function setScrollLock(lock) {
      isScrollLocked = lock;
      targetSection.style.position = lock ? "fixed" : "";
      targetSection.style.top = lock ? "0" : "";
      targetSection.style.left = lock ? "0" : "";
      targetSection.style.width = lock ? "100%" : "";
      targetSection.style.height = lock ? "100vh" : "";
      document.body.style.overflow = lock ? "hidden" : "";
    }
  
    function handleScroll() {
      if (!isScrollLocked) {
        const sectionTop = targetSection.getBoundingClientRect().top;
        const sectionBottom = targetSection.getBoundingClientRect().bottom;
  
        // You can adjust the value (150 in this example) to control when to trigger the scroll lock
        if (sectionTop < window.innerHeight - 150 && sectionBottom > 150) {
          setScrollLock(true);
  
          // Wait for a short period (e.g., 1 second) before unlocking the scroll
          setTimeout(function () {
            setScrollLock(false);
          }, 1000); // Adjust as needed
        }
      }
    }
  
    window.addEventListener("scroll", function () {
      requestAnimationFrame(handleScroll);
    });
  });
  