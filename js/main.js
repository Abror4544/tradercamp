$(function () {
  $(".menu__bar").click(function () {
    $(".header-nav__secondmenu").slideDown(500);
    $(".header-effect").addClass("active");
  });

  $(".menu__close").click(function () {
    $(".header-nav__secondmenu").slideUp(500);
    $(".header-effect").removeClass("active");
  });

  let menuHeight = $(".header-nav").outerHeight();
  $(window).scroll(function () {
    let offset = $(window).scrollTop();
    $(".header-nav").toggleClass("fixed", offset > 100);
    offset > 100
      ? $(".header-content").css("padding-top", menuHeight)
      : $(".header-content").css("padding-top", "0");
  });

  var swiper = new Swiper(".teamSwiper", {
    spaceBetween: 60,
    navigation: {
      nextEl: ".team-button-next",
      prevEl: ".team-button-prev",
    },
    pagination: {
      el: ".team-pagination",
      type: "fraction",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  });

  let link = $(".header-nav__firstmenu li a, .footer__menu ul li a");

  link.on("click", function (e) {
    link.removeClass("active");
    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);

    $("html, body").animate({ scrollTop: target.offset().top - 70 }, 500);
  });

  $(".close_thanks").click(function () {
    $.fancybox.close({
      href: "javascript:;",
      src: "#thanks",
    });
  });

  let nameOfCourse = document.querySelectorAll(".course__item__title");
  let btn = document.querySelectorAll(".course__item__link");
  let formTitle = document.querySelector(".courseForm .title");

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      formTitle.innerHTML = "";
      formTitle.innerHTML = `курс ${nameOfCourse[i].innerText}`;
      $(".course_name").val(nameOfCourse[i].innerText);
    });
  }

  /* ************** calculator select ******************* */
  $("select").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());
    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
    }
    var $listItems = $list.children("li");
    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
    });
    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });

  /* ************** calculator select ******************* */
});
