(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3333754,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

document.addEventListener("DOMContentLoaded", function () {
        var lists = Array.prototype.slice.call(
          document.querySelectorAll(".systemList")
        );
        if (!lists.length) return;

        function normalize(s) {
          return (s || "").replace(/\s+/g, " ").trim().toLowerCase();
        }

        lists.forEach(function (list) {
          var titleEl = list.querySelector(".systemList__title");
          list.dataset.serviceNormalized = normalize(
            titleEl ? titleEl.textContent : ""
          );
        });

        var tabs = Array.prototype.slice.call(
          document.querySelectorAll(".otherServices__services > div")
        );
        if (!tabs.length) return;

        function showFor(serviceName) {
          var norm = normalize(serviceName);
          lists.forEach(function (l) {
            if (norm === "" || norm === "all") l.style.display = "";
            else
              l.style.display =
                l.dataset.serviceNormalized === norm ? "" : "none";
          });
        }

        function setActiveTab(tab) {
          tabs.forEach(function (t) {
            t.classList.remove("otherServices__active");
            t.classList.add("otherServices__not-active");
          });
          tab.classList.remove("otherServices__not-active");
          tab.classList.add("otherServices__active");
        }

        tabs.forEach(function (tab) {
          tab.addEventListener("click", function () {
            setActiveTab(tab);
            showFor(tab.textContent);
          });
        });

        var active =
          tabs.find(function (t) {
            return t.classList.contains("otherServices__active");
          }) || tabs[0];
        if (active) {
          setActiveTab(active);
          showFor(active.textContent);
        }
      });
