import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('.add-to-cart-btn').click(function() {  // اظهار رسالة التنبيه للمنتج بأنه اضيف للعربة 
        alert('أضيف المنتج الى العربة ');
    });

    $('#copyright').text("جميع الحقوق محفوظة سنة" + new Date().getFullYear());

    $('.product-option input[type="radio"]').change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

    //عند تغيير كمية المنتج 
    $('[data-product-quantity]').change(function () {

        //اجلب الكمية الجديدة 
        var newQuantity= $(this).val();

        // ابحث عن السطر الذي يحتوي معلومات هذا المنتج 
        var parent = $(this).parents('[data-product-info]');

        // اجلب سعر القطعة الواحدة عن معلومات المنتج 
        var pricePerUnit = parent.attr('data-product-price');

        // السعر الاجمالي للمنتج هو سعر القطعة مضروبا بعددها 
        var totalPriceForProduct = newQuantity * pricePerUnit;

        // عين السعر الجديد ضمن خلية السعر الاجمالي للمنتج في هذا السطر 
        parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

        // حدث السعر الاجمالي لكل المنتجات 
        calculateTotalPrice();
    });

    $('[data-remove-from-cart]').click(function() {
        $(this).parents('[data-product-info]').remove();
        // اعد حساب السعر الاجمالي بعد حذف احد المنتجات 
        calculateTotalPrice();
    });

    function calculateTotalPrice() {
        // انشئ متغيرا جديدا لحفظ السعر الاجمالي 
        var totalPriceForAllProducts = 0;

        // لكل سطر يمثل معلومات المنتج في الصفحة 
        $('[data-product-info]').each(function() {

            // اجلب سعر القطعة الواحدة من الخاصية الموافقة 
            var pricePerUnit = $(this).attr('data-product-price');

            // اجلب كمية المنتج من حقل اختيار الكمية 
            var quantity = $(this).find('[data-product-quantity]').val();

            var totalPriceForProduct = pricePerUnit * quantity;

            // اضف السعر الاجمالي لهذا المنتج الى السعر الاجمالي لكل المنتجات واحفظ القيكة في المتغير نفسه 
            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;
        });

        // حدث السعر الاجمالي لكل المنتجات في الصفحة 
        $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
    }
});