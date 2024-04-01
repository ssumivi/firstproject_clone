window.addEventListener("load",function(){
     //   신청조회 모달 창 열기
  document.getElementById("search-btn").addEventListener("click", function () {
    document.getElementById("search-modal").style.display = "block";
  });
  //   신청조회 모달 창 닫기
  document.querySelectorAll("#search-modal .q-m-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("search-modal").style.display = "none";
    });
  });
})