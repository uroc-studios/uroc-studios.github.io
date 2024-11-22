
function webpSwap() {
    //
    if (enableImageSwap) {
        $('.webpswap').each(function () {
            $(this).attr('src', $(this).attr('src').replace(".webp", ".png"));
        });
        $('.512-swap').each(function () {
            $(this).attr('src', $(this).attr('src').replace("_512x512", ""));
        });
        $('.bg512swap').each(function () {
            $(this).data('bgimage', $(this).data('bgimage').replace("_512x512", ""));
            $(this).attr('style', $(this).attr('style').replace("_512x512", ""));
        });
        $('.bgwebpswap').each(function () {
            $(this).data('bgimage', $(this).data('bgimage').replace(".webp", ".png"));
            $(this).attr('style', $(this).attr('style').replace(".webp", ".png"));
        });
    }
    //bgwebpswap bg512swap
}

var enableImageSwap = false;
$(document).ready(function () {
    webpSwap();
});