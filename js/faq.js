window.addEventListener("load" ,function(){
     // FAQ 모달 창 열기
  document.getElementById("FAQ-btn").addEventListener("click", function () {
    document.getElementById("FAQ-modal").style.display = "block";
  });
  // FAQ 모달 창 닫기
  document.querySelectorAll("#FAQ-modal .q-m-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("FAQ-modal").style.display = "none";
    });
  });

})