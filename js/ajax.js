$(function () {
  $("#formCalc").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formCalc").serialize();
      $.ajax({
        url: "calculator.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#calc-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#simpleCalc").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#simpleCalc").serialize();
      $.ajax({
        url: "calculator.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formCall").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formCall").serialize();
      $.ajax({
        url: "modal.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#modal-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#simpleForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#simpleForm").serialize();
      $.ajax({
        url: "simple.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formCourse").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formCourse").serialize();
      $.ajax({
        url: "course.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#course-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formQuestion").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formQuestion").serialize();
      $.ajax({
        url: "question.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#question-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

});
