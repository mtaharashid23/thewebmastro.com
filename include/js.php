    <script src="assets/js/plugin.js"></script>
    <script src="assets/js/lazysizes.js"></script>
    <script src="assets/js/lazyload-background.js"></script>    
    <script src="assets/js/index.js"></script>
    <script>
        var currentTab = 0;

        function showTab(e) {
            var t = document.getElementsByClassName("tab");
            t[e].style.display = "block", 0 == e ? (document.getElementById("prevBtn").style.display = "none", document
                    .getElementById("signupBtn2").style.display = "none", document.getElementById("nextBtn").style
                    .display = "inline") : document.getElementById("prevBtn").style.display = "inline", e == t.length -
                1 ? (document.getElementById("nextBtn").style.display = "none", document.getElementById("signupBtn2")
                    .style.display = "inline") : document.getElementById("nextBtn").innerHTML = "Next"
        }

        function nextPrev(e) {
            var t = document.getElementsByClassName("tab");
            if (1 == e && !validateForm()) return !1;
            t[currentTab].style.display = "none", showTab(currentTab += e)
        }

        function validateForm() {
            var e, t, s = !0;
            for (e = document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input"), t = 0; t < e
                .length; t++) "" == e[t].value && (e[t].className += " invalid", s = !1);
            return s
        }

        var currentTab03 = 0;

        function showTabPopupExit(e) {
            var t = document.getElementsByClassName("tab03");
            t[e].style.display = "block", 0 == e ? (document.getElementById("prevBtn03").style.display = "none",
                    document.getElementById("signupBtn03").style.display = "none", document.getElementById("nextBtn03")
                    .style.display = "inline") : document.getElementById("prevBtn03").style.display = "inline", e == t
                .length - 1 ? (document.getElementById("nextBtn03").style.display = "none", document.getElementById(
                    "signupBtn03").style.display = "inline") : document.getElementById("nextBtn03").innerHTML = "Next"
        }
    </script>    
    <script>
        console.log("ok")
    </script>
    <script>
        $('.chat, .chatt, .live_chatt').click(function () {
            $zopim.livechat.window.toggle();
        });

        function setButtonURL() {
            $zopim(function () {
                $zopim.livechat.window.toggle()
            })
        }
        // zE(function () {
        //     zE.activate();
        // });
    </script>
    <!-- End of  Zendesk Widget script -->