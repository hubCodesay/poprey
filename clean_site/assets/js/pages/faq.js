(function(h,o,t,j,a,r){
  try {
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3333754,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  } catch(e) { console.error("Hotjar init failed", e); }
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

console.log('FAQ Script: 1:1 Implementation Loaded');

document.addEventListener('DOMContentLoaded', function() {
  
  // Define Assets paths - adjusting for potential relative path issues
  // Checking if we are in a subdir like /pt/ or root
  var isSubDir = window.location.pathname.split('/').length > 2; 
  var pathPrefix = isSubDir ? '../' : ''; 
  // Should ideally be consistent. Let's assume content always loads relative assets correctly or use absolute if possible.
  // Actually, the HTML provided uses `assets/images/...` so it assumes <base> or rel path.
  // I will use properties from existing DOM to determine path structure if possible.
  
  var ARROW_BOTTOM = "assets/images/arrow_bottom.8ac69b63ca5f4608106219b4d6c2d934.svg";
  var ARROW_TOP = "assets/images/arrow_top.19b2082d2cae579d668d43cb67752caa.png";

  // Check prefix
  if(document.querySelector('img[src^="../assets"]')) {
      ARROW_BOTTOM = "../" + ARROW_BOTTOM;
      ARROW_TOP = "../" + ARROW_TOP;
  }

  var FAQ_ANSWERS = {
      "When will my order be processed?": "Most orders are processed immediately. However, depending on the service and quantity, it may take up to 24 hours to fully complete delivery.",
      "Why cannot I get a free test?": "The free trial is available only once per account and IP address. If you have already used it or if our system detects multiple attempts, it will not be available.",
      "What if I entered incorrect data for the order?": "If the order has not started yet, please contact our support team immediately. If it has already been delivered to the wrong link provided, we cannot reverse it.",
      "What if I made an order for a private profile?": "We cannot deliver services to private profiles. Please set your profile to public and contact us to restart your order.",
      "When is it impossible to fix a problem with an incorrect order?": "If you provided a valid link to someone else's account and the service was delivered, we cannot recover the funds or undo the service.",
      "What can I do if I’ve lost my followers after some time?": "Drops can happen occasionally. We offer a retention guarantee for most services. Please contact support with your order ID for a refill.",
      "Why the order does not match the description?": "Delivery times and quality can vary based on network updates. If there is a significant discrepancy, please open a ticket with our support team.",
      "Is the real time orders tracker in the lower left corner real?": "Yes, it displays real transactions happening on our platform in real-time.",
      "What if I enter an incorrect email address?": "You can contact support with your payment receipt, and we will update your email address in our system manually.",
      "Do you have prices for resellers?": "Yes, we offer special rates for bulk purchasers and resellers. Please contact us via the contact form for more details."
  };

  var panels = document.querySelectorAll('.panel-block');

  function openPanel(panel) {
      // 1. Add class to main block
      panel.classList.add('panel-block-color');
      
      // 2. Add class to cirkul wrapper
      var cirkul = panel.querySelector('.expanded-cirkul');
      if(cirkul) cirkul.classList.add('expanded-cirkul-color');
      
      // 3. Change Arrow Image
      var img = panel.querySelector('img[alt="arrow"]');
      if(img) img.src = ARROW_TOP;
      
      // 4. Inject Text
      var container = panel.querySelector('.panel-container');
      if(container) {
          // Check if text already exists
          var existingText = container.querySelector('.panel-text');
          if(!existingText) {
              var titleEl = container.querySelector('.panel-title');
              var questionText = titleEl ? titleEl.innerText.trim() : "";
              var textDiv = document.createElement('div');
              textDiv.className = 'panel-text';
              textDiv.innerText = FAQ_ANSWERS[questionText] || "Answer not available.";
              // Insert AFTER title
              container.appendChild(textDiv);
          } else {
              existingText.style.display = 'block';
          }
      }
  }

  function closePanel(panel) {
      // 1. Remove class
      panel.classList.remove('panel-block-color');
      
      // 2. Remove class from cirkul
      var cirkul = panel.querySelector('.expanded-cirkul');
      if(cirkul) cirkul.classList.remove('expanded-cirkul-color');
      
      // 3. Revert Arrow Image
      var img = panel.querySelector('img[alt="arrow"]');
      if(img) img.src = ARROW_BOTTOM;
      
      // 4. Hide/Remove Text
      var textDiv = panel.querySelector('.panel-text');
      if(textDiv) {
          textDiv.style.display = 'none'; 
          // Or remove it? The example structure shows it present. 
          // But for animation usually it's persistent. 
          // Given the request "1:1 active block", I will assume it's inserted/visible only when active.
          // I'll hide it for now to match closed state.
      }
  }

  panels.forEach(function(panel) {
      panel.onclick = function(e) {
          // Prevent closing if clicking text selection? 
          // Actually if we click the text inside a div, it bubbles to panel.
          // But the structure handles it.
          
          var isActive = this.classList.contains('panel-block-color');
          
          // Auto-close others
          panels.forEach(function(p) {
              if(p !== panel && p.classList.contains('panel-block-color')) {
                  closePanel(p);
              }
          });
          
          if(isActive) {
              closePanel(this);
          } else {
              openPanel(this);
          }
      };
  });
});
