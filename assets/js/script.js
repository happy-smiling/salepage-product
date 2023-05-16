var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 10; i++) {
    var thumb = document.createElement("img");
    thumb.src = "assets/images/victorian-dollhouse-" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
        currentImage.src = this.src;
        }
    );
}

$('.add').click(function () {
		if ($(this).prev().val() < 9999) {
    	$(this).prev().val(+$(this).prev().val() + 1);
		}
});
$('.sub').click(function () {
		if ($(this).next().val() > 1) {
    	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
});

$(document).ready(function(){
    $(".menu-topic").click(function(){
        var dataId = $(this).data('id');
        $(".box-detail").hide();
        $(".box-detail[data-id="+dataId+"]").show();
    });
});	